import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { loginReducer } from './redux/Reducers/LoginReducer';
const redux = require("redux")
const createStore = redux.createStore

//create store
const myStore = createStore(loginReducer)
ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

