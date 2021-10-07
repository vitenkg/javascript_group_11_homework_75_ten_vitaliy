import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeValueCrypt, fetchDecrypt, fetchEncrypt} from "../../store/actions/Action";

const Home = () => {
    const dispatch = useDispatch();
    const cryptDecoded = useSelector(state => state.encrypt.messageDecoded);
    const cryptEncoded = useSelector(state => state.encrypt.messageEncoded);
    const password = useSelector(state => state.encrypt.password);

    const onEncrypt = () => {
        dispatch(fetchEncrypt({cryptDecoded, password}));
    };

    const onDecrypt = () => {
        dispatch(fetchDecrypt({cryptEncoded, password}));
    };

    const changeValue = e => {
        const {name, value} = e.target;
        dispatch(changeValueCrypt({name, value}));
    };

    return (
        <>
            <label>
                Decoded message
                <input
                    type="text"
                    name="messageDecoded"
                    value={cryptDecoded}
                    onChange={changeValue}
                />
            </label>
            <label>
                Password
                <input
                    type="text"
                    name="password"
                    value={password}
                    onChange={changeValue}
                />
            </label>
            <label>
                Encoded message
                <input
                    type="text"
                    name="messageEncoded"
                    value={cryptEncoded}
                    onChange={changeValue}
                />
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