import * as actionTypes from './actionTypes';

// synchronous action to be dispatched 
export const saveResult = ( res ) => {
    return {
        type: actionTypes.STORE_RESULT,
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
        type: actionTypes.DELETE_RESULT,
        resultElId: id
    }
};