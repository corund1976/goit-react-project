import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import transactionActions from 'redux/transactions/transactionActions';
import authActions from 'redux/auth/authActions';

const initialState = [];

const incomes = createReducer(initialState, {
  [transactionActions.getIncomeSuccess]: (_, { payload }) => payload,
  [transactionActions.postIncomeSuccess]: (state, { payload }) => [
    ...state,
    payload.transaction,
  ],
  [transactionActions.deleteIncomeSuccess]: (state, { payload }) =>
    state.filter(item => item.id !== payload.transaction.id),
  [authActions.logoutSuccess]: (_, __) => initialState,
});

const expenses = createReducer(initialState, {
  [transactionActions.getExpenseSuccess]: (_, { payload }) => payload,
  [transactionActions.postExpenseSuccess]: (state, { payload }) => [
    ...state,
    payload.transaction,
  ],
  [transactionActions.deleteExpenseSuccess]: (state, { payload }) =>
    state.filter(item => item.id !== payload.transaction.id),
  [authActions.logoutSuccess]: (_, __) => initialState,
});

export default combineReducers({
  incomes,
  expenses,
});

// const transactionsInitialState = [];
// const transactions = createReducer(transactionsInitialState, {
//   [userActions.getUserInfoSuccess]: (_, { payload }) => payload,
// });

// const userInitialState = {};
// const user = createReducer(userInitialState, {
//   [authActions.loginSuccess]: (_, { payload }) => payload,
//   [authActions.logoutSuccess]: () => userInitialState,
//   [authActions.refreshSuccess]: (_, { payload }) => payload,
// });