import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import userActions from 'redux/user/userActions';

const balanceInitialState = null;

const balance = createReducer(balanceInitialState, {
  [userActions.updateUserBalanceSuccess]: (_, { payload }) => payload,
});

const transactionsInitialState = [];

const transactions = createReducer(transactionsInitialState, {
  [userActions.getUserInfoSuccess]: (_, { payload }) => payload,
});

export default combineReducers({
  balance,
  transactions,
});
