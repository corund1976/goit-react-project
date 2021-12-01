import { createAction } from "@reduxjs/toolkit";

const registerRequest = createAction("auth/registerRequest");
const registerSuccess = createAction("auth/registerSuccess");
const registerError = createAction("auth/registerError");

const loginRequest = createAction("auth/loginRequest");
const loginSuccess = createAction("auth/loginSuccess");
const loginError = createAction("auth/loginError");

const logoutRequest = createAction("auth/logoutRequest");
const logoutSuccess = createAction("auth/logoutSuccess");
const logoutError = createAction("auth/logoutError");

const refreshRequest = createAction("auth/refreshRequest");
const refreshSuccess = createAction("auth/refreshSuccess");
const refreshError = createAction("auth/refreshError");

const setGoogleTokenRequest = createAction("auth/setGoogleTokenRequest");
const setGoogleTokenSuccess = createAction("auth/setGoogleTokenSuccess");
const setGoogleTokenError = createAction("auth/setGoogleTokenError");

// eslint-disable-next-line
export default {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  refreshRequest,
  refreshSuccess,
  refreshError,
  setGoogleTokenRequest,
  setGoogleTokenSuccess,
  setGoogleTokenError,
};
