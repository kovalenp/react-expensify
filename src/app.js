import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Router from './Router';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();
store.dispatch(addExpense({ description: 'ING Investment', amount: 5000, createdAt: 100 }));
store.dispatch(addExpense({ description: 'ESTA form', amount: 1000, createdAt: 200 }));
store.dispatch(addExpense({ description: 'Andorra travel', amount: 3000, createdAt: 300 }));
store.dispatch(addExpense({ description: 'Jamon', amount: 2000, createdAt: 400 }));
// store.dispatch(setTextFilter('ING'));

const jsx = (
  <Provider store={store}>
    <Router />
  </Provider>
);

/* eslint-disable-next-line */
ReactDOM.render(jsx, document.getElementById('app'));
