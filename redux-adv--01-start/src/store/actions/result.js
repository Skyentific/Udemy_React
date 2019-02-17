import * as actionTypes from './actionTypes';

// synchronous action to be dispatched 
export const saveResult = ( res ) => {

    // const updatedResult = res * 2;

    return {
        type: actionTypes.STORE_RESULT,
        result: res
    }
}

// asynchronous action, which will be handled by thunk
export const storeResult = (res) => {
    return (dispatch, getState) => {

        setTimeout(() => {
            console.log(getState());
            const oldCounter = getState().ctr.counter;
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