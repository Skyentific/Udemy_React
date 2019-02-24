import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (authData) => {
    return {
        type: actionTypes.AUTH_SUCCESS
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const auth = (email, password, isSignup) => {
    console.log(isSignup);
    return dispatch => {
        // authenticate user
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };
        const APIKEY = 'AIzaSyCtKa86bxinFB9TBd029J-5eg6J-0vETpw'
        const signup_URL = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=' + APIKEY;
        const signin_URL = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=' + APIKEY;
        let url = '';
        console.log(signup_URL);
        if (isSignup) {
            url = signup_URL;
        } else {
            url = signin_URL;
        }

        axios.post(url, authData )
            .then(response => {
                console.log(response);
                dispatch(authSuccess(response.data))
            })
            .catch(err => {
                console.log(err);
                dispatch(authFail(err));
            }
        );
    };
};