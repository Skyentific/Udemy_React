import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let myRequest = axios.interceptors.request.use(request => {
    console.log(request);
    return request;  // have to return otherwise it blocks all requests
}, error => {
    console.log(error);
    return Promise.reject(error);  // pass error onto where the request happened.
});

axios.interceptors.response.use(response => {
    console.log(response);
    return response;  // have to return otherwise it blocks all requests
}, error => {
    console.log(error);
    return Promise.reject(error);  // pass error onto where the request happened.
});

// axios.interceptors.request.eject(myRequest);  // activate to disable interceptor

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
