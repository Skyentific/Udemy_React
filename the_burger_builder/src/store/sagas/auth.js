import { put, delay } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import * as actions from '../actions/index';
import axios from 'axios';


// function* is a generator
export function* logoutSaga(action) {

    yield localStorage.removeItem('token');
    yield localStorage.removeItem('expirationTime');
    yield localStorage.removeItem('userId');
    
    yield put(actions.logoutSucceed());
}

export function* checkAuthTimeoutSaga(action) {
    yield delay(action.expirationTime * 1000);
    yield put(actions.logout());
}


export function* authUserSaga(action) {
    // authenticate user
    yield put(actions.authStart());

    const authData = {
        email: action.email,
        password: action.password,
        returnSecureToken: true
    };
    const APIKEY = 'AIzaSyCtKa86bxinFB9TBd029J-5eg6J-0vETpw'
    const signup_URL = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=' + APIKEY;
    const signin_URL = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=' + APIKEY;
    let url = '';
    console.log(signup_URL);
    if (action.isSignup) {
        url = signup_URL;
    } else {
        url = signin_URL;
    }

    try {
        const response = yield axios.post(url, authData)
        const expirationDate = yield new Date (new Date().getTime() + response.data.expiresIn);
        console.log(response);
        yield localStorage.setItem('token', response.data.idToken);
        yield localStorage.setItem('expirationDate', expirationDate);
        yield localStorage.setItem('userId', response.data.localId);

        yield put(actions.authSuccess((response.data.idToken, response.data.localId)));
        yield put(actions.checkAuthTimeout(response.data.expiresIn));

    } catch (err) {
        yield put(actions.authFail(err.response.data.error))
    }
    
};