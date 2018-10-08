import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import {Provider, connect} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {changePage, requestExercises, requestNews, requestProblem, sendCode} from './reducers.js';
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({changePage, requestExercises, requestNews, requestProblem, sendCode})
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(<Provider store = {store}>
                  <App />
                </Provider>, document.getElementById('root'));
registerServiceWorker();
