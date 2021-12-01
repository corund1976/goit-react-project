import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import authActions from 'redux/auth/authActions';

const accessTokenInitialState = null;

const accessTokenReducer = createReducer(accessTokenInitialState, {
  [authActions.loginSuccess]: (_, { payload }) => payload.accessToken,
  [authActions.logoutSuccess]: () => accessTokenInitialState,
  [authActions.setGoogleToken]: (_, { payload }) => payload,
});

const refreshTokenInitialState = null;

const refreshTokenReducer = createReducer(refreshTokenInitialState, {
  [authActions.loginSuccess]: (_, { payload }) => payload.refreshToken,
  [authActions.logoutSuccess]: () => refreshTokenInitialState,
});


const sidInitialState = null;

const sidReducer = createReducer(sidInitialState, {
  [authActions.loginSuccess]: (_, { payload }) => payload.sid,
  [authActions.logoutSuccess]: () => sidInitialState,
});

const isAuthorizedReducer = createReducer(false, {
  [authActions.loginSuccess]: () => true,
  [authActions.logoutSuccess]: () => false,
  [authActions.refreshSuccess]: () => true,
  [authActions.refreshError]: () => false,
});

export default combineReducers({
  accessToken: accessTokenReducer,
  refreshToken: refreshTokenReducer,
  sid: sidReducer,
  isAuthorized: isAuthorizedReducer,
});
