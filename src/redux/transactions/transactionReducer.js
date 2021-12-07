import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {authActions} from 'redux/auth';
import {userActions} from 'redux/user';
import {transactionActions} from 'redux/transactions';

const initialState = [];

const incomesReducer = createReducer(initialState, {
  [transactionActions.getIncomeSuccess]: (_, { payload }) => payload.incomes,
  [transactionActions.postIncomeSuccess]: (state, { payload }) =>
    [...state, payload.transaction],
  
  [transactionActions.deleteIncomeSuccess]: (state, { payload }) =>
    state.filter(item => item._id !== payload.transactionId),
  
  [authActions.logoutSuccess]: () => initialState,
});

const incomeMonthStatsReducer = createReducer(initialState, {
  [transactionActions.getIncomeSuccess]: (_, { payload }) => payload.monthsStats,
  
  [authActions.logoutSuccess]: () => initialState,
});

const expensesReducer = createReducer(initialState, {
  [transactionActions.getExpenseSuccess]: (_, { payload }) => payload.expenses,
  [transactionActions.postExpenseSuccess]: (state, { payload }) =>
    [...state, payload.transaction],
  
  [transactionActions.deleteExpenseSuccess]: (state, { payload }) =>
    state.filter(item => item._id !== payload.transactionId),
  
  [authActions.logoutSuccess]: () => initialState,
});

const expenseMonthStatsReducer = createReducer(initialState, {
  [transactionActions.getExpenseSuccess]: (_, { payload }) => payload.monthsStats,

  [authActions.logoutSuccess]: () => initialState,
});

const transactionsReducer = createReducer(initialState, {
  [authActions.loginSuccess]: (_, { payload }) => payload.userData.transactions,
  [authActions.logoutSuccess]: () => initialState,

  [transactionActions.deleteTransactionSuccess]: (state, { payload }) =>
    state.filter(item => item._id !== payload.transactionId),

  [userActions.getUserInfoSuccess]: (_, { payload }) => payload.transactions,
});

export default combineReducers({
  incomes: incomesReducer,
  incomeMonthStats: incomeMonthStatsReducer,
  expenses: expensesReducer,
  expenseMonthStats: expenseMonthStatsReducer,
  transactions: transactionsReducer,
});
