const express = require('express');
const cors = require('cors');
const Caesar = require('caesar-salad').Caesar;

const app = express();
app.use(express.json());
app.use(cors());

const port = 8000;


app.post('/encode', (req, res) => {
    if (!req.body.message) {
        return res.status(400).send({error: 'Data not valid'});
    }

    const message = {
        message: req.body.message,
        password: req.body.password,
    };

    res.send(Caesar.Cipher(message.password).crypt(message.message));

});

app.post('/decode', (req, res) => {
    if (!req.body.message) {
        return res.status(400).send({error: 'Data not valid'});
    }

    const message = {
        message: req.body.message,
        password: req.body.password,
    };

    res.send(Caesar.Decipher(message.password).crypt(message.message));
});

app.listen(port, () => {
    console.log('We are live on ' + port);
});
