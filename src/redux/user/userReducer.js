import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {authActions} from 'redux/auth';
import {userActions} from 'redux/user';

const userEmailInitialState = null;

const userEmailReducer = createReducer(userEmailInitialState, {
  [authActions.loginSuccess]: (_, { payload }) => payload.userData.email,
  [authActions.logoutSuccess]: () => userEmailInitialState,

  [userActions.getUserInfoSuccess]: (_, { payload }) => payload.email,
});

const userIdInitialState = null;

const userIdReducer = createReducer(userIdInitialState, {
  [authActions.loginSuccess]: (_, { payload }) => payload.userData.id,
  [authActions.logoutSuccess]: () => userIdInitialState,
});

export default combineReducers({
  userEmail: userEmailReducer,
  userId: userIdReducer,
});
