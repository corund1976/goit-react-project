import { createReducer } from '@reduxjs/toolkit';

import {authActions} from 'redux/auth';
import {userActions} from 'redux/user';
import {categoriesActions} from 'redux/categories';
import {transactionActions} from 'redux/transactions';

const loaderInitialState = null;

const loaderReducer = createReducer(loaderInitialState, {
  [authActions.registerRequest]: () => true,
  [authActions.loginRequest]: () => true,
  [authActions.logoutRequest]: () => true,
  [authActions.refreshRequest]: () => true,
  [authActions.setGoogleTokenRequest]: () => true,

  [authActions.registerSuccess]: () => false,
  [authActions.loginSuccess]: () => false,
  [authActions.logoutSuccess]: () => false,
  [authActions.refreshSuccess]: () => false,
  [authActions.setGoogleTokenSuccess]: () => false,
  
  [authActions.registerError]: () => false,
  [authActions.loginError]: () => false,
  [authActions.logoutError]: () => false,
  [authActions.refreshError]: () => false,
  [authActions.setGoogleTokenError]: () => false,

  [categoriesActions.getIncomeCategoriesRequest]: () => true,
  [categoriesActions.getExpenseCategoriesRequest]: () => true,

  [categoriesActions.getIncomeCategoriesSuccess]: () => false,
  [categoriesActions.getExpenseCategoriesSuccess]: () => false,

  [categoriesActions.getIncomeCategoriesError]: () => false,
  [categoriesActions.getExpenseCategoriesError]: () => false,

  [transactionActions.getIncomeRequest]: () => true,
  [transactionActions.postIncomeRequest]: () => true,
  [transactionActions.deleteIncomeRequest]: () => true,
  [transactionActions.getExpenseRequest]: () => true,
  [transactionActions.postExpenseRequest]: () => true,
  [transactionActions.deleteExpenseRequest]: () => true,
  [transactionActions.deleteTransactionRequest]: () => true,

  [transactionActions.getIncomeSuccess]: () => false,
  [transactionActions.postIncomeSuccess]: () => false,
  [transactionActions.deleteIncomeSuccess]: () => false,
  [transactionActions.getExpenseSuccess]: () => false,
  [transactionActions.postExpenseSuccess]: () => false,
  [transactionActions.deleteExpenseSuccess]: () => false,
  [transactionActions.deleteTransactionSuccess]: () => false,

  [transactionActions.getIncomeError]: () => false,
  [transactionActions.postIncomeError]: () => false,
  [transactionActions.deleteIncomeError]: () => false,
  [transactionActions.getExpenseError]: () => false,
  [transactionActions.postExpenseError]: () => false,
  [transactionActions.deleteExpenseError]: () => false,
  [transactionActions.deleteTransactionError]: () => false,
  
  [userActions.updateUserBalanceRequest]: () => true,
  [userActions.getUserInfoRequest]: () => true,

  [userActions.updateUserBalanceSuccess]: () => false,
  [userActions.getUserInfoSuccess]: () => false,

  [userActions.updateUserBalanceError]: () => false,
  [userActions.getUserInfoError]: () => false,
});

export default loaderReducer;
