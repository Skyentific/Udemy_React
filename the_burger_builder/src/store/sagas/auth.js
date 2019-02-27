import { put } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';

// function* is a generator
function* logout(action) {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
    localStorage.removeItem('userId');
    
    put({
            type: actionTypes.AUTH_LOGOUT
    })

}