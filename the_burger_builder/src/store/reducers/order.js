import * as actionTypes from '../actions/actionTypes';

const initalState = {
    orders: [],
    loading: false

};

const reducer = (state = initalState, action) => {

    console.log('[reducers/orders.js]', action);
    switch (action.type) {

        case actionTypes.PURCHASE_BURGER_START:
            console.log('Purhase burger start');
            return {
                ...state,
                loading: true
            };
        
        case actionTypes.PURCHASE_BURGER_SUCCESS:

            console.log('[reducers/order.js:PURCHASE_BURGER_SUCCESS]', action.orderData);

            const newOrder = {
                ...action.orderData,
                id: action.orderId
            }
            console.log('reducers/order.js:PURchaSE_BURGER_SUCCESS]', newOrder);
            return {
                ...state,
                loading: false,
                orders: state.orders.concat(newOrder)
            };
        
        case actionTypes.PURCHASE_BURGER_FAIL:
            return {
                ...state,
                loading: false,
            };
        
        default:
            console.log('Test');
            return state;
    }
};

export default reducer;