import { createAction } from '@reduxjs/toolkit';

const updateUserBalanceRequest = createAction('user/updateUserBalanceRequest');
const updateUserBalanceSuccess = createAction('user/updateUserBalanceSuccess');
const updateUserBalanceError = createAction('user/updateUserBalanceError');

const getUserInfoRequest = createAction('user/getUserInfoRequest');
const getUserInfoSuccess = createAction('user/getUserInfoSuccess');
const getUserInfoError = createAction('user/getUserInfoError');

// eslint-disable-next-line
export default {
  updateUserBalanceRequest,
  updateUserBalanceSuccess,
  updateUserBalanceError,
  getUserInfoRequest,
  getUserInfoSuccess,
  getUserInfoError,
};
