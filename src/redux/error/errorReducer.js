import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import authActions from 'redux/auth/authActions';
import categoriesActions from 'redux/categories/categoriesActions';
import transactionActions from 'redux/transactions/transactionActions';
import userActions from 'redux/user/userActions';

const errorMessageIntialState = null;

const errorMessageReducer = createReducer(errorMessageIntialState, {
  [authActions.registerError]: (_, { payload }) => payload.message,
  [authActions.loginError]: (_, { payload }) => payload.message,
  [authActions.logoutError]: (_, { payload }) => payload.message,
  [authActions.refreshError]: (_, { payload }) => payload.message,
  [authActions.setGoogleTokenError]: (_, { payload }) => payload.message,

  [authActions.registerRequest]: (_, { payload }) => errorMessageIntialState,
  [authActions.loginRequest]: (_, { payload }) => errorMessageIntialState,
  [authActions.logoutRequest]: (_, { payload }) => errorMessageIntialState,
  [authActions.refreshRequest]: (_, { payload }) => errorMessageIntialState,
  [authActions.setGoogleTokenRequest]: (_, { payload }) => errorMessageIntialState,

  [categoriesActions.getIncomeCategoriesError]: (_, { payload }) => payload.message,
  [categoriesActions.getExpenseCategoriesError]: (_, { payload }) => payload.message,

  [categoriesActions.getIncomeCategoriesRequest]: (_, { payload }) => errorMessageIntialState,
  [categoriesActions.getExpenseCategoriesRequest]: (_, { payload }) => errorMessageIntialState,

  [transactionActions.getIncomeError]: (_, { payload }) => payload.message,
  [transactionActions.postIncomeError]: (_, { payload }) => payload.message,
  [transactionActions.deleteIncomeError]: (_, { payload }) => payload.message,
  [transactionActions.getExpenseError]: (_, { payload }) => payload.message,
  [transactionActions.postExpenseError]: (_, { payload }) => payload.message,
  [transactionActions.deleteExpenseError]: (_, { payload }) => payload.message,
  [transactionActions.deleteTransactionError]: (_, { payload }) => payload.message,

  [transactionActions.getIncomeRequest]: (_, { payload }) => errorMessageIntialState,
  [transactionActions.postIncomeRequest]: (_, { payload }) => errorMessageIntialState,
  [transactionActions.deleteIncomeRequest]: (_, { payload }) => errorMessageIntialState,
  [transactionActions.getExpenseRequest]: (_, { payload }) => errorMessageIntialState,
  [transactionActions.postExpenseRequest]: (_, { payload }) => errorMessageIntialState,
  [transactionActions.deleteExpenseRequest]: (_, { payload }) => errorMessageIntialState,
  [transactionActions.deleteTransactionRequest]: (_, { payload }) => errorMessageIntialState,

  [userActions.updateUserBalanceError]: (_, { payload }) => payload.message,
  [userActions.getUserInfoError]: (_, { payload }) => payload.message,

  [userActions.updateUserBalanceRequest]: (_, { payload }) => errorMessageIntialState,
  [userActions.getUserInfoRequest]: (_, { payload }) => errorMessageIntialState,
});

const errorStatusIntialState = null;

const errorStatusReducer = createReducer(errorStatusIntialState, {
  [authActions.registerError]: (_, { payload }) => payload.response.status,
  [authActions.loginError]: (_, { payload }) => payload.response.status,
  [authActions.logoutError]: (_, { payload }) => payload.response.status,
  [authActions.refreshError]: (_, { payload }) => payload.response.status,
  [authActions.setGoogleTokenError]: (_, { payload }) => payload.response.status,

  [authActions.registerRequest]: (_, { payload }) => errorStatusIntialState,
  [authActions.loginRequest]: (_, { payload }) => errorStatusIntialState,
  [authActions.logoutRequest]: (_, { payload }) => errorStatusIntialState,
  [authActions.refreshRequest]: (_, { payload }) => errorStatusIntialState,
  [authActions.setGoogleTokenRequest]: (_, { payload }) => errorStatusIntialState,

  [categoriesActions.getIncomeCategoriesError]: (_, { payload }) => payload.response.status,
  [categoriesActions.getExpenseCategoriesError]: (_, { payload }) => payload.response.status,

  [categoriesActions.getIncomeCategoriesRequest]: (_, { payload }) => errorStatusIntialState,
  [categoriesActions.getExpenseCategoriesRequest]: (_, { payload }) => errorStatusIntialState,

  [transactionActions.getIncomeError]: (_, { payload }) => payload.response.status,
  [transactionActions.postIncomeError]: (_, { payload }) => payload.response.status,
  [transactionActions.deleteIncomeError]: (_, { payload }) => payload.response.status,
  [transactionActions.getExpenseError]: (_, { payload }) => payload.response.status,
  [transactionActions.postExpenseError]: (_, { payload }) => payload.response.status,
  [transactionActions.deleteExpenseError]: (_, { payload }) => payload.response.status,
  [transactionActions.deleteTransactionError]: (_, { payload }) => payload.response.status,

  [transactionActions.getIncomeRequest]: (_, { payload }) => errorStatusIntialState,
  [transactionActions.postIncomeRequest]: (_, { payload }) => errorStatusIntialState,
  [transactionActions.deleteIncomeRequest]: (_, { payload }) => errorStatusIntialState,
  [transactionActions.getExpenseRequest]: (_, { payload }) => errorStatusIntialState,
  [transactionActions.postExpenseRequest]: (_, { payload }) => errorStatusIntialState,
  [transactionActions.deleteExpenseRequest]: (_, { payload }) => errorStatusIntialState,
  [transactionActions.deleteTransactionRequest]: (_, { payload }) => errorStatusIntialState,
  
  [userActions.updateUserBalanceError]: (_, { payload }) => payload.response.status,
  [userActions.getUserInfoError]: (_, { payload }) => payload.response.status,

  [userActions.updateUserBalanceRequest]: (_, { payload }) => errorStatusIntialState,
  [userActions.getUserInfoRequest]: (_, { payload }) => errorStatusIntialState,
});

export default combineReducers({
  errorMessage: errorMessageReducer,
  errorStatus: errorStatusReducer,
});