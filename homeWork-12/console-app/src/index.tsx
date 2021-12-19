import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, compose} from 'redux'
import { Provider } from 'react-redux';
import { reducer } from './reducer';
import './index.css';
import App from './App';


// const store = createStore(reducer)
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root') as HTMLElement
);

