export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

// synchronous action creator
// can receive payloads
export const increment = () => {
    return {
        type: INCREMENT
    }
};

export const decrement = () => {
    return {
        type: DECREMENT
    }
};

export const add = (value) => {
    return {
        type: ADD,
        val: value
    }
};

export const subtract = (value) => {
    return {
        type: SUBTRACT,
        val: value
    }
};

// synchronous action to be dispatched 
export const saveResult = ( res ) => {
    return {
        type: STORE_RESULT,
        result: res
    }
}

// asynchronous action, which will be handled by thunk
export const storeResult = (res) => {
    return dispatch => {

        setTimeout(() => {

            dispatch(saveResult(res))
            
        }, 2000);
    }
};

export const deleteResult = (id) => {
    return {
        type: DELETE_RESULT,
        resultElId: id
    }
};