import { createAction } from '@reduxjs/toolkit';

const getIncomeCategoriesRequest = createAction('user/getIncomeCategoriesRequest');
const getIncomeCategoriesSuccess = createAction('user/getIncomeCategoriesSuccess');
const getIncomeCategoriesError = createAction('user/getIncomeCategoriesError');

const getExpenseCategoriesRequest = createAction('user/getExpenseCategoriesRequest');
const getExpenseCategoriesSuccess = createAction('user/getExpenseCategoriesSuccess');
const getExpenseCategoriesError = createAction('user/getExpenseCategoriesError');
// eslint-disable-next-line
export default {
  getIncomeCategoriesRequest,
  getIncomeCategoriesSuccess,
  getIncomeCategoriesError,
  getExpenseCategoriesRequest,
  getExpenseCategoriesSuccess,
  getExpenseCategoriesError,
};
