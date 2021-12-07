import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import { authActions } from 'redux/auth';
import { userActions } from 'redux/user';
import { categoriesActions } from 'redux/categories';
import { transactionActions } from 'redux/transactions';

const errorMessageInitialState = null;

const errorMessageReducer = createReducer(errorMessageInitialState, {
  [authActions.registerError]: (_, { payload }) => payload.response.data.message,
  [authActions.loginError]: (_, { payload }) => payload.response.data.message,
  [authActions.logoutError]: (_, { payload }) => payload.response.data.message,
  [authActions.refreshError]: (_, { payload }) => payload.response.data.message,
  [authActions.setGoogleTokenError]: (_, { payload }) => payload.response.data.message,

  [authActions.registerRequest]: () => errorMessageInitialState,
  [authActions.loginRequest]: () => errorMessageInitialState,
  [authActions.logoutRequest]: () => errorMessageInitialState,
  [authActions.refreshRequest]: () => errorMessageInitialState,
  [authActions.setGoogleTokenRequest]: () => errorMessageInitialState,

  [authActions.registerSuccess]: () => errorMessageInitialState,
  [authActions.loginSuccess]: () => errorMessageInitialState,
  [authActions.logoutSuccess]: () => errorMessageInitialState,
  [authActions.refreshSuccess]: () => errorMessageInitialState,
  [authActions.setGoogleTokenSuccess]: () => errorMessageInitialState,

  [categoriesActions.getIncomeCategoriesError]: (_, { payload }) =>
    payload.message,
  [categoriesActions.getExpenseCategoriesError]: (_, { payload }) =>
    payload.message,

  [categoriesActions.getIncomeCategoriesRequest]: () =>
    errorMessageInitialState,
  [categoriesActions.getExpenseCategoriesRequest]: () =>
    errorMessageInitialState,
  
  [categoriesActions.getIncomeCategoriesSuccess]: () =>
    errorMessageInitialState,
  [categoriesActions.getExpenseCategoriesSuccess]: () =>
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

  [transactionActions.getIncomeSuccess]: () => errorMessageInitialState,
  [transactionActions.postIncomeSuccess]: () => errorMessageInitialState,
  [transactionActions.deleteIncomeSuccess]: () => errorMessageInitialState,
  [transactionActions.getExpenseSuccess]: () => errorMessageInitialState,
  [transactionActions.postExpenseSuccess]: () => errorMessageInitialState,
  [transactionActions.deleteExpenseSuccess]: () => errorMessageInitialState,
  [transactionActions.deleteTransactionSuccess]: () => errorMessageInitialState,

  [userActions.updateUserBalanceError]: (_, { payload }) => payload,
  [userActions.getUserInfoError]: (_, { payload }) => payload,

  [userActions.updateUserBalanceRequest]: () => errorMessageInitialState,
  [userActions.getUserInfoRequest]: () => errorMessageInitialState,

  [userActions.updateUserBalanceSuccess]: () => errorMessageInitialState,
  [userActions.getUserInfoSuccess]: () => errorMessageInitialState,
});

const errorStatusInitialState = null;

const errorStatusReducer = createReducer(errorStatusInitialState, {
  [authActions.registerError]: (_, { payload }) => payload.response.status,
  [authActions.loginError]: (_, { payload }) => payload.response.status,
  [authActions.logoutError]: (_, { payload }) => payload.response.status,
  [authActions.refreshError]: (_, { payload }) => payload.response.status,
  [authActions.setGoogleTokenError]: (_, { payload }) => payload.response.status,

  [authActions.registerRequest]: () => errorStatusInitialState,
  [authActions.loginRequest]: () => errorStatusInitialState,
  [authActions.logoutRequest]: () => errorStatusInitialState,
  [authActions.refreshRequest]: () => errorStatusInitialState,
  [authActions.setGoogleTokenRequest]: () => errorStatusInitialState,

  [authActions.registerSuccess]: () => errorStatusInitialState,
  [authActions.loginSuccess]: () => errorStatusInitialState,
  [authActions.logoutSuccess]: () => errorStatusInitialState,
  [authActions.refreshSuccess]: () => errorStatusInitialState,
  [authActions.setGoogleTokenSuccess]: () => errorStatusInitialState,

  [categoriesActions.getIncomeCategoriesError]: (_, { payload }) =>
    payload.response.status,
  [categoriesActions.getExpenseCategoriesError]: (_, { payload }) =>
    payload.response.status,

  [categoriesActions.getIncomeCategoriesRequest]: () => errorStatusInitialState,
  [categoriesActions.getExpenseCategoriesRequest]: () =>
    errorStatusInitialState,
  
  [categoriesActions.getIncomeCategoriesSuccess]: () => errorStatusInitialState,
  [categoriesActions.getExpenseCategoriesSuccess]: () =>
    errorStatusInitialState,

  [transactionActions.getIncomeError]: (_, { payload }) => payload.response.status,
  [transactionActions.postIncomeError]: (_, { payload }) => payload.response.status,
  [transactionActions.deleteIncomeError]: (_, { payload }) => payload.response.status,
  [transactionActions.getExpenseError]: (_, { payload }) => payload.response.status,
  [transactionActions.postExpenseError]: (_, { payload }) => payload.response.status,
  [transactionActions.deleteExpenseError]: (_, { payload }) => payload.response.status,
  [transactionActions.deleteTransactionError]: (_, { payload }) => payload.response.status,

  [transactionActions.getIncomeRequest]: () => errorStatusInitialState,
  [transactionActions.postIncomeRequest]: () => errorStatusInitialState,
  [transactionActions.deleteIncomeRequest]: () => errorStatusInitialState,
  [transactionActions.getExpenseRequest]: () => errorStatusInitialState,
  [transactionActions.postExpenseRequest]: () => errorStatusInitialState,
  [transactionActions.deleteExpenseRequest]: () => errorStatusInitialState,
  [transactionActions.deleteTransactionRequest]: () => errorStatusInitialState,

  [transactionActions.getIncomeSuccess]: () => errorStatusInitialState,
  [transactionActions.postIncomeSuccess]: () => errorStatusInitialState,
  [transactionActions.deleteIncomeSuccess]: () => errorStatusInitialState,
  [transactionActions.getExpenseSuccess]: () => errorStatusInitialState,
  [transactionActions.postExpenseSuccess]: () => errorStatusInitialState,
  [transactionActions.deleteExpenseSuccess]: () => errorStatusInitialState,
  [transactionActions.deleteTransactionSuccess]: () => errorStatusInitialState,
  
  [userActions.updateUserBalanceError]: (_, { payload }) => payload.response.status,
  [userActions.getUserInfoError]: (_, { payload }) => payload.response.status,

  [userActions.updateUserBalanceRequest]: () => errorStatusInitialState,
  [userActions.getUserInfoRequest]: () => errorStatusInitialState,

  [userActions.updateUserBalanceSuccess]: () => errorStatusInitialState,
  [userActions.getUserInfoSuccess]: () => errorStatusInitialState,
});

export default combineReducers({
  errorMessage: errorMessageReducer,
  errorStatus: errorStatusReducer,
});
