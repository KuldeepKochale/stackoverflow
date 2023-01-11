import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
// createStore -> configureStore
import { createStore, applyMiddleware, compose } from 'redux'
// import { configureStore, applyMiddleware, compose } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import Reducers from './reducers'
import authReducer from './reducers/auth';

const store = createStore( Reducers, compose(applyMiddleware(thunk)))
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
