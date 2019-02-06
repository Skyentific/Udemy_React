import * as actionTypes from '../action'

const initialState = {
    results:[]
}

const reducer = (state=initialState, action) => {
    
    switch (action.type) {
        
        case actionTypes.STORE_RESULT:
            
            return {
                ...state,
                results: state.results.concat({
                    id: new Date(),
                    value: action.result
                })
            }
        case actionTypes.DELETE_RESULT:
            // const id = 2;
            // const newArray = [...state.results]
            // newArray.splice(id, 1);

            const updatedArray = state.results.filter((item) => {
                if (item.id === action.resultElId) {
                    return false;
                } else {
                    return true;
                }
            });

            return {
                ...state,
                results: updatedArray
            }
        default:
            break
    }
    return state;
}

export default reducer;