import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import authActions from 'redux/auth/authActions';

const tokenInitialState = null;

const token = createReducer(tokenInitialState, {
  [authActions.loginSuccess]: (_, { payload }) => payload.accessToken,
  [authActions.logoutSuccess]: () => tokenInitialState,
  [authActions.setGoogleToken]: (_, { payload }) => payload,
});

const userInitialState = {};

const user = createReducer(userInitialState, {
  [authActions.loginSuccess]: (_, { payload }) => payload,
  [authActions.logoutSuccess]: () => userInitialState,
  [authActions.refreshSuccess]: (_, { payload }) => payload,
});

const isAuthorized = createReducer(false, {
  [authActions.loginSuccess]: () => true,
  [authActions.logoutSuccess]: () => false,
  [authActions.refreshSuccess]: () => true,
  [authActions.refreshError]: () => false,
});

export default combineReducers({
  token,
  user,
  isAuthorized,
});
