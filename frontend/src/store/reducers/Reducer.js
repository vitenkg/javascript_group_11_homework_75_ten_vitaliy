import {
    CHANGE_VALUE_CRYPT,
    FETCH_DECRYPT_FAILURE,
    FETCH_DECRYPT_REQUEST,
    FETCH_DECRYPT_SUCCESS,
    FETCH_ENCRYPT_FAILURE,
    FETCH_ENCRYPT_REQUEST,
    FETCH_ENCRYPT_SUCCESS
} from "../actions/Action";


const initialState = {
    messageEncoded: '',
    messageDecoded: '',
    password: '',
    fetchLoading: false,
}

const Reducer = (state = initialState, action) => {
    const payload = action.payload;
    switch (action.type) {
        case FETCH_ENCRYPT_REQUEST:
            return {...state, fetchLoading: true};
        case FETCH_ENCRYPT_SUCCESS:
            return {...state, fetchLoading: false, messageEncoded: payload};
        case FETCH_ENCRYPT_FAILURE:
            return {...state, fetchLoading: false};
        case FETCH_DECRYPT_REQUEST:
            return {...state, fetchLoading: true};
        case FETCH_DECRYPT_SUCCESS:
            return {...state, fetchLoading: false,  messageDecoded: payload};
        case FETCH_DECRYPT_FAILURE:
            return {...state, fetchLoading: false};
        case CHANGE_VALUE_CRYPT:
            return {...state, [payload.name]: payload.value}
        default:
            return state;
    }
    ;
};

export default Reducer;