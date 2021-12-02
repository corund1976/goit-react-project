import { createAction } from '@reduxjs/toolkit';

const getIncomeRequest = createAction('user/getIncomeRequest');
const getIncomeSuccess = createAction('user/getIncomeSuccess');
const getIncomeError = createAction('user/getIncomeError');

const postIncomeRequest = createAction('user/postIncomeRequest');
const postIncomeSuccess = createAction('user/postIncomeSuccess');
const postIncomeError = createAction('user/postIncomeError');

const getExpenseRequest = createAction('user/getExpenseRequest');
const getExpenseSuccess = createAction('user/getExpenseSuccess');
const getExpenseError = createAction('user/getExpenseError');

const postExpenseRequest = createAction('user/postExpenseRequest');
const postExpenseSuccess = createAction('user/postExpenseSuccess');
const postExpenseError = createAction('user/postExpenseError');

const deleteTransactionRequest = createAction('user/deleteTransactionRequest');
const deleteTransactionSuccess = createAction('user/deleteTransactionSuccess');
const deleteTransactionError = createAction('user/deleteTransactionError');
// eslint-disable-next-line
export default {
  // INCOME
  getIncomeRequest,
  getIncomeSuccess,
  getIncomeError,
  postIncomeRequest,
  postIncomeSuccess,
  postIncomeError,
  // EXPENSE
  getExpenseRequest,
  getExpenseSuccess,
  getExpenseError,
  postExpenseRequest,
  postExpenseSuccess,
  postExpenseError,
  // DELETE
  deleteTransactionRequest,
  deleteTransactionSuccess,
  deleteTransactionError,
};
