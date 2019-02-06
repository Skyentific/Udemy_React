import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux';
import conuterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';

let rootReducer = combineReducers({
    ctr: conuterReducer,
    res: resultReducer
})

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
