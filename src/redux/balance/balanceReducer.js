import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import authActions from 'redux/auth/authActions';
import userActions from 'redux/user/userActions';

const balanceInitialState = 0;

const balanceReducer = createReducer(balanceInitialState, {
  [authActions.loginSuccess]: (_, { payload }) => payload.userData.balance,
  [authActions.logoutSuccess]: () => balanceInitialState,
  [userActions.getUserInfoSuccess]: (_, { payload }) => payload.balance,
  [userActions.updateUserBalanceSuccess]: (_, { payload }) => payload.newBalance,
});

export default combineReducers({
  balance: balanceReducer,
});
