import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import authActions from "redux/auth/authActions";
import categoriesActions from "redux/categories/categoriesActions";
import transactionActions from "redux/transactions/transactionActions";
import userActions from "redux/user/userActions";

const errorMessageInitialState = null;

const errorMessageReducer = createReducer(errorMessageInitialState, {
  [authActions.registerError]: (_, { payload }) => payload.message,
  [authActions.loginError]: (_, { payload }) => payload.message,
  [authActions.logoutError]: (_, { payload }) => payload.message,
  [authActions.refreshError]: (_, { payload }) => payload.message,
  [authActions.setGoogleTokenError]: (_, { payload }) => payload.message,

  [authActions.registerRequest]: () => errorMessageInitialState,
  [authActions.loginRequest]: () => errorMessageInitialState,
  [authActions.logoutRequest]: () => errorMessageInitialState,
  [authActions.refreshRequest]: () => errorMessageInitialState,
  [authActions.setGoogleTokenRequest]: () => errorMessageInitialState,

  [categoriesActions.getIncomeCategoriesError]: (_, { payload }) =>
    payload.message,
  [categoriesActions.getExpenseCategoriesError]: (_, { payload }) =>
    payload.message,

  [categoriesActions.getIncomeCategoriesRequest]: () =>
    errorMessageInitialState,
  [categoriesActions.getExpenseCategoriesRequest]: () =>
    errorMessageInitialState,

  [transactionActions.getIncomeError]: (_, { payload }) => payload.message,
  [transactionActions.postIncomeError]: (_, { payload }) => payload.message,
  [transactionActions.deleteIncomeError]: (_, { payload }) => payload.message,
  [transactionActions.getExpenseError]: (_, { payload }) => payload.message,
  [transactionActions.postExpenseError]: (_, { payload }) => payload.message,
  [transactionActions.deleteExpenseError]: (_, { payload }) => payload.message,
  [transactionActions.deleteTransactionError]: (_, { payload }) =>
    payload.message,

  [transactionActions.getIncomeRequest]: () => errorMessageInitialState,
  [transactionActions.postIncomeRequest]: () => errorMessageInitialState,
  [transactionActions.deleteIncomeRequest]: () => errorMessageInitialState,
  [transactionActions.getExpenseRequest]: () => errorMessageInitialState,
  [transactionActions.postExpenseRequest]: () => errorMessageInitialState,
  [transactionActions.deleteExpenseRequest]: () => errorMessageInitialState,
  [transactionActions.deleteTransactionRequest]: () => errorMessageInitialState,

  [userActions.updateUserBalanceError]: (_, { payload }) => payload,
  [userActions.getUserInfoError]: (_, { payload }) => payload,

  [userActions.updateUserBalanceRequest]: () => errorMessageInitialState,
  [userActions.getUserInfoRequest]: () => errorMessageInitialState,
});

const errorStatusInitialState = null;

const errorStatusReducer = createReducer(errorStatusInitialState, {
  [authActions.registerError]: (_, { payload }) => payload?.status,
  [authActions.loginError]: (_, { payload }) => payload?.status,
  [authActions.logoutError]: (_, { payload }) => payload?.response.status,
  [authActions.refreshError]: (_, { payload }) => payload?.response.status,
  [authActions.setGoogleTokenError]: (_, { payload }) =>
    payload?.response.status,

  [authActions.registerRequest]: () => errorStatusInitialState,
  [authActions.loginRequest]: () => errorStatusInitialState,
  [authActions.logoutRequest]: () => errorStatusInitialState,
  [authActions.refreshRequest]: () => errorStatusInitialState,
  [authActions.setGoogleTokenRequest]: () => errorStatusInitialState,

  [categoriesActions.getIncomeCategoriesError]: (_, { payload }) =>
    payload.response.status,
  [categoriesActions.getExpenseCategoriesError]: (_, { payload }) =>
    payload.response.status,

  [categoriesActions.getIncomeCategoriesRequest]: () => errorStatusInitialState,
  [categoriesActions.getExpenseCategoriesRequest]: () =>
    errorStatusInitialState,

  [transactionActions.getIncomeError]: (_, { payload }) =>
    payload.response.status,
  [transactionActions.postIncomeError]: (_, { payload }) =>
    payload.response.status,
  [transactionActions.deleteIncomeError]: (_, { payload }) =>
    payload.response.status,
  [transactionActions.getExpenseError]: (_, { payload }) =>
    payload.response.status,
  [transactionActions.postExpenseError]: (_, { payload }) =>
    payload.response.status,
  [transactionActions.deleteExpenseError]: (_, { payload }) =>
    payload.response.status,
  [transactionActions.deleteTransactionError]: (_, { payload }) =>
    payload.response.status,

  [transactionActions.getIncomeRequest]: () => errorStatusInitialState,
  [transactionActions.postIncomeRequest]: () => errorStatusInitialState,
  [transactionActions.deleteIncomeRequest]: () => errorStatusInitialState,
  [transactionActions.getExpenseRequest]: () => errorStatusInitialState,
  [transactionActions.postExpenseRequest]: () => errorStatusInitialState,
  [transactionActions.deleteExpenseRequest]: () => errorStatusInitialState,
  [transactionActions.deleteTransactionRequest]: () => errorStatusInitialState,
  
  // [userActions.updateUserBalanceError]: (_, { payload }) => payload.response?.status,
  // [userActions.getUserInfoError]: (_, { payload }) => payload.response?.status,

  [userActions.updateUserBalanceRequest]: () => errorStatusInitialState,
  [userActions.getUserInfoRequest]: () => errorStatusInitialState,
});

export default combineReducers({
  errorMessage: errorMessageReducer,
  errorStatus: errorStatusReducer,
});
