import { createAction } from '@reduxjs/toolkit';

const getIncomeRequest = createAction('user/getIncomeRequest');
const getIncomeSuccess = createAction('user/getIncomeSuccess');
const getIncomeError = createAction('user/getIncomeError');

const postIncomeRequest = createAction('user/postIncomeRequest');
const postIncomeSuccess = createAction('user/postIncomeSuccess');
const postIncomeError = createAction('user/postIncomeError');

const deleteIncomeRequest = createAction('user/deleteIncomeRequest');
const deleteIncomeSuccess = createAction('user/deleteIncomeSuccess');
const deleteIncomeError = createAction('user/deleteIncomeError');

const getExpenseRequest = createAction('user/getExpenseRequest');
const getExpenseSuccess = createAction('user/getExpenseSuccess');
const getExpenseError = createAction('user/getExpenseError');

const postExpenseRequest = createAction('user/postExpenseRequest');
const postExpenseSuccess = createAction('user/postExpenseSuccess');
const postExpenseError = createAction('user/postExpenseError');

const deleteExpenseRequest = createAction('user/deleteExpenseRequest');
const deleteExpenseSuccess = createAction('user/deleteExpenseSuccess');
const deleteExpenseError = createAction('user/deleteExpenseError');

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
  deleteIncomeRequest,
  deleteIncomeSuccess,
  deleteIncomeError,
  // EXPENSE
  getExpenseRequest,
  getExpenseSuccess,
  getExpenseError,
  postExpenseRequest,
  postExpenseSuccess,
  postExpenseError,
  deleteExpenseRequest,
  deleteExpenseSuccess,
  deleteExpenseError,
  deleteTransactionRequest,
  deleteTransactionSuccess,
  deleteTransactionError,
};
