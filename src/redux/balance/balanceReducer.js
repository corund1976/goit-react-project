import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {authActions} from 'redux/auth';
import {userActions} from 'redux/user';
import {transactionActions} from 'redux/transactions';

const balanceInitialState = 0;

const balanceReducer = createReducer(balanceInitialState, {
  [authActions.loginSuccess]: (_, { payload }) => payload.userData.balance,
  [authActions.logoutSuccess]: () => balanceInitialState,

  [userActions.updateUserBalanceSuccess]: (_, { payload }) =>
    payload.newBalance,
  [userActions.getUserInfoSuccess]: (_, { payload }) => payload.balance,

  [transactionActions.postIncomeSuccess]: (state, { payload }) =>
    payload.newBalance,
  [transactionActions.postExpenseSuccess]: (state, { payload }) =>
    payload.newBalance,

  // [transactionActions.deleteTransactionSuccess]: (_, { payload }) =>
  //   payload.newBalance,

  [transactionActions.deleteIncomeSuccess]: (state, { payload }) =>
    payload.data.newBalance,
  [transactionActions.deleteExpenseSuccess]: (state, { payload }) =>
    payload.data.newBalance,
});

export default combineReducers({
  balance: balanceReducer,
});
