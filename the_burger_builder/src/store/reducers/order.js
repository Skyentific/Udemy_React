import * as actionTypes from '../actions/actionTypes';

const initalState = {
    orders: [],
    loading: false,
    purchased: false
};

const reducer = (state = initalState, action) => {

    console.log('[reducers/order.js]', action);
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
                purchased: true,
                orders: state.orders.concat(newOrder)
            };
        
        case actionTypes.PURCHASE_BURGER_FAIL:
            return {
                ...state,
                loading: false,
            };
        
        case actionTypes.PURCHASE_INIT:
            return {
                ...state,
                purchased: false
            };

        case actionTypes.FETCH_ORDERS_START:
            return {
                ...state,
                loading: true
            };

        case actionTypes.FETCH_ORDERS_SUCCESS:
            return {
                ...state,
                orders: action.orders,
                loading: false
            };

        case actionTypes.FETCH_ORDERS_FAIL:
            return {
                ...state,
                loading: false
            };
            
        default:
            console.log('Test');
            return state;
    }
};

export default reducer;