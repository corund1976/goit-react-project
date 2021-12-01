import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import authActions from 'redux/auth/authActions';
import userActions from 'redux/user/userActions';
import transactionActions from 'redux/transactions/transactionActions';

const balanceInitialState = 0;

const balanceReducer = createReducer(balanceInitialState, {
  [authActions.loginSuccess]: (_, { payload }) => payload.userData.balance,
  [authActions.logoutSuccess]: () => balanceInitialState,
  
  [userActions.updateUserBalanceSuccess]: (_, { payload }) => payload.newBalance,
  [userActions.getUserInfoSuccess]: (_, { payload }) => payload.balance,

  [transactionActions.postIncomeSuccess]: (state, { payload }) => payload.newBalance,
  [transactionActions.postExpenseSuccess]: (state, { payload }) => payload.newBalance,
  [transactionActions.deleteTransactionSuccess]: (_, { payload }) => payload.newBalance,
  });

export default combineReducers({
  balance: balanceReducer,
});
