import axios from "axios";

export const FETCH_ENCRYPT_REQUEST = "FETCH_ENCRYPT_REQUEST";
export const FETCH_ENCRYPT_SUCCESS = "FETCH_ENCRYPT_SUCCESS";
export const FETCH_ENCRYPT_FAILURE = "FETCH_ENCRYPT_FAILURE";

export const FETCH_DECRYPT_REQUEST = "FETCH_DECRYPT_REQUEST";
export const FETCH_DECRYPT_SUCCESS = "FETCH_DECRYPT_SUCCESS";
export const FETCH_DECRYPT_FAILURE = "FETCH_DECRYPT_FAILURE";

export const CHANGE_VALUE_CRYPT = 'CHANGE_VALUE_CRYPT';

export const fetchEncryptRequest = () => ({type: FETCH_ENCRYPT_REQUEST});
export const fetchEncryptSuccess = (data) => ({type: FETCH_ENCRYPT_SUCCESS, payload: data});
export const fetchEncryptFailure = () => ({type: FETCH_ENCRYPT_FAILURE});

export const fetchDecryptRequest = () => ({type: FETCH_DECRYPT_REQUEST});
export const fetchDecryptSuccess = (data) => ({type: FETCH_DECRYPT_SUCCESS, payload: data});
export const fetchDecryptFailure = () => ({type: FETCH_DECRYPT_FAILURE});

export const changeValueCrypt = data => ({type: CHANGE_VALUE_CRYPT, payload:data})

export const fetchEncrypt = data => {
    return async dispatch => {
        try {
            dispatch(fetchEncryptRequest());
            const response = await axios.post('http://localhost:8000/encode', {
                password: data.password,
                message: data.cryptDecoded,
            });
            dispatch(fetchEncryptSuccess(response.data));
        } catch (e) {
            dispatch(fetchEncryptFailure());
        }
    };
};

export const fetchDecrypt = data => {
    return async dispatch => {
        try {
            dispatch(fetchDecryptRequest());
            const response = await axios.post('http://localhost:8000/decode', {
                password: data.password,
                message: data.cryptEncoded,
            });
            dispatch(fetchDecryptSuccess(response.data));
        } catch (e) {
            dispatch(fetchDecryptFailure());
        }
    };
};