import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const Home = () => {
    const dispatch = useDispatch();
    const cryptDecoded = useSelector(state => state.encrypt.messageDecode);
    const cryptEncoded = useSelector(state => state.encrypt.messageEncode);

    const onEncrypt = () => {
        console.log('Encode');
    };

    const onDecrypt = () => {
        console.log('Decode');
    };

    return (
        <>
            <label>
                Decoded message
                <input type="text" cols="40" rows="5"/>
            </label>
            <label>
                Password
                <input type="text" cols="40" rows="5"/>
            </label>
            <label>
                Encoded message
                <input type="text" cols="40" rows="5"/>
            </label>
            <div>
                <button
                    onClick={onEncrypt}
                >
                    Encrypt
                </button>
                <button
                    onClick={onDecrypt}
                >
                    Decrypt
                </button>
            </div>
        </>
    );
};

export default Home;