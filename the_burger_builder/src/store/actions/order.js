import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const purchaseBurgerSuccess = (id, orderData) => {
    console.log('[actions/orders.js: purchaseBurgerSuccess]', id, orderData);
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    }
}

export const purchaseBurgerFail = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    }
}

export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    }
}

// async
export const purchaseBurger = (orderData) => {
    console.log('[order.js:purchaseBurger]', orderData);
    return dispatch => {

        dispatch(purchaseBurgerStart());

        axios.post('/orders.json', orderData)
            .then(response => {
                console.log('[actions/orders.js: purchaseBurger]', response.data, orderData);
                dispatch(purchaseBurgerSuccess(response.data.name, orderData));
            })
            .catch(error => {
                dispatch(purchaseBurgerFail(error));
            }
        );
    }
}