import { createReducer } from '@reduxjs/toolkit';

import authActions from 'redux/auth/authActions';
import categoriesActions from 'redux/categories/categoriesActions';
import transactionActions from 'redux/transactions/transactionActions';
import userActions from 'redux/user/userActions';

const errorIntialState = null;

const errorReducer = createReducer(errorIntialState, {
  [authActions.registerError]: (_, { payload }) => payload,
  [authActions.loginError]: (_, { payload }) => payload,
  [authActions.logoutError]: (_, { payload }) => payload,
  [authActions.refreshError]: (_, { payload }) => payload,
  [authActions.setGoogleTokenError]: (_, { payload }) => payload,

  [categoriesActions.getIncomeCategoriesError]: (_, { payload }) => payload,
  [categoriesActions.getExpenseCategoriesError]: (_, { payload }) => payload,

  [transactionActions.getIncomeError]: (_, { payload }) => payload,
  [transactionActions.postIncomeError]: (_, { payload }) => payload,
  [transactionActions.deleteIncomeError]: (_, { payload }) => payload,
  [transactionActions.getExpenseError]: (_, { payload }) => payload,
  [transactionActions.postExpenseError]: (_, { payload }) => payload,
  [transactionActions.deleteExpenseError]: (_, { payload }) => payload,
  
  [userActions.updateUserBalanceError]: (_, { payload }) => payload,
  [userActions.getUserInfoError]: (_, { payload }) => payload,
});

export default errorReducer;