const express = require('express');
const bodyParser = require('body-parser');
const Caesar = require('caesar-salad').Caesar;

const app = express();
app.use(bodyParser.json());

const port = 8000;


app.post('/', (req, res) => {
    if (!req.body.message || !req.body.crypt) {
        return res.status(400).send({error: 'Data not valid'});
    }

    const message = {
        message: req.body.message,
        password: req.body.password,
        crypt: req.body.crypt,
    };

    if (message.crypt === "encode") {
        res.send(Caesar.Cipher(message.password).crypt(message.message));
    }

    if (message.crypt === "decode") {
        res.send(Caesar.Decipher(message.password).crypt(message.message));
    }
});

app.listen(port, () => {
    console.log('We are live on ' + port);
});
