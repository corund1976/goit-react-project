import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import transactionActions from 'redux/transactions/transactionActions';
import authActions from 'redux/auth/authActions';
import userActions from 'redux/user/userActions';

const initialState = [];

const incomesReducer = createReducer(initialState, {
  [transactionActions.getIncomeSuccess]: (_, { payload }) => payload,
  [transactionActions.postIncomeSuccess]: (state, { payload }) => [
    ...state,
    payload.transaction,
  ],
  [transactionActions.deleteTransactionSuccess]: (state, { payload }) =>
    state.filter(item => item.id !== payload.transactionId),
  
  [authActions.logoutSuccess]: () => initialState,
});

const incomeMonthStatsReducer = createReducer(initialState, {
  [transactionActions.getIncomeSuccess]: (_, { payload }) => payload.monthStats,
  
  [authActions.logoutSuccess]: () => initialState,
});

const expensesReducer = createReducer(initialState, {
  [transactionActions.getExpenseSuccess]: (_, { payload }) => payload,
  [transactionActions.postExpenseSuccess]: (state, { payload }) =>
    [...state, payload.transaction],
  [transactionActions.deleteTransactionSuccess]: (state, { payload }) =>
    state.filter(item => item.id !== payload.transactionId),
  
  [authActions.logoutSuccess]: () => initialState,
});

const expenseMonthStatsReducer = createReducer(initialState, {
  [transactionActions.getExpenseSuccess]: (_, { payload }) => payload.monthStats,

  [authActions.logoutSuccess]: () => initialState,
});

const transactionsReducer = createReducer(initialState, {
  [authActions.loginSuccess]: (_, { payload }) => payload.userData.transactions,
  [authActions.logoutSuccess]: () => initialState,

  [userActions.getUserInfoSuccess]: (_, { payload }) => payload.transactions,
});

export default combineReducers({
  incomes: incomesReducer,
  incomeMonthStats: incomeMonthStatsReducer,
  expenses: expensesReducer,
  expenseMonthStats: expenseMonthStatsReducer,
  transactions: transactionsReducer,
});
