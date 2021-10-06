import {
    FETCH_DECRYPT_FAILURE,
    FETCH_DECRYPT_REQUEST, FETCH_DECRYPT_SUCCESS,
    FETCH_ENCRYPT_FAILURE,
    FETCH_ENCRYPT_REQUEST,
    FETCH_ENCRYPT_SUCCESS
} from "../actions/Action";


const initialState = {
    messageEncode: null,
    messageDecode: null,
    fetchLoading: false,
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ENCRYPT_REQUEST:
            return {...state, fetchLoading: true};
        case FETCH_ENCRYPT_SUCCESS:
            return {...state, fetchLoading: false, messageEncode: action.payload};
        case FETCH_ENCRYPT_FAILURE:
            return {...state, fetchLoading: false};
        case FETCH_DECRYPT_REQUEST:
            return {...state, fetchLoading: true};
        case FETCH_DECRYPT_SUCCESS:
            return {...state, fetchLoading: false, messageDecode: action.payload};
        case FETCH_DECRYPT_FAILURE:
            return {...state, fetchLoading: false};
        default:
            return state;
    };
};

export default Reducer;