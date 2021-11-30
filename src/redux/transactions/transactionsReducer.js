import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import transActions from 'redux/transactions/transActions';

import actionAuth from '../actions/authActions';
import actionDelete from '../actions/transactionDeleteActions';

const initialState = [];

const incomes = createReducer(initialState, {
  [transActions.incomeGetSuccess]: (_, { payload }) => payload,
  [transActions.incomePostSuccess]: (state, { payload }) => [
    ...state,
    payload.transaction,
  ],
  [actionDelete.transactionIncomeDeleteSuccess]: (state, { payload }) =>
    state.filter(item => item.id !== payload.transaction.id),
  [actionAuth.logOutSuccess]: (_, __) => initialState,
});

const expenses = createReducer(initialState, {
  [transActions.expenseGetSuccess]: (_, { payload }) => payload,
  [transActions.expensePostSuccess]: (state, { payload }) => [
    ...state,
    payload.transaction,
  ],
  [actionDelete.transactionExpenceDeleteSuccess]: (state, { payload }) =>
    state.filter(item => item.id !== payload.transaction.id),
  [actionAuth.logOutSuccess]: (_, __) => initialState,
});

export default combineReducers({
  incomes,
  expenses,
});
