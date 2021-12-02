import api from 'services/kapusta-api';
import transactionActions from 'redux/transactions/transactionActions';

const handlePostIncome = data => dispatch => {
  dispatch(transactionActions.postIncomeRequest());

  api
    .postIncome(data)
    .then(({ data }) => dispatch(transactionActions.postIncomeSuccess(data)))
    .catch(error => dispatch(transactionActions.postIncomeError(error.message)));
};

const handleGetIncome = () => dispatch => {
  dispatch(transactionActions.getIncomeRequest());

  api
    .getIncome()
    .then(({ data }) => dispatch(transactionActions.getIncomeSuccess(data)))
    .catch(error => dispatch(transactionActions.getIncomeError(error.message)));
};

const handlePostExpense = data => dispatch => {
  dispatch(transactionActions.postExpenseRequest());

  api
    .postExpense(data)
    .then(({ data }) => dispatch(transactionActions.postExpenseSuccess(data)))
    .catch(error => dispatch(transactionActions.postExpenseError(error.message)));
};

const handleGetExpense = () => dispatch => {
  dispatch(transactionActions.getExpenseRequest());

  api
    .getExpense()
    .then(({ data }) => dispatch(transactionActions.getExpenseSuccess(data)))
    .catch(error => dispatch(transactionActions.getExpenseError(error.message)));
};

const handleDeleteTransaction = transactionId => dispatch => {
  dispatch(transactionActions.deleteTransactionRequest());

  api
    .deleteTransaction(transactionId)
    .then(({ data }) => dispatch(transactionActions.deleteTransactionSuccess({ data, transactionId })))
    .catch(error => dispatch(transactionActions.deleteTransactionError(error.message)));
};
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  handlePostIncome,
  handleGetIncome,
  handlePostExpense,
  handleGetExpense,
  handleDeleteTransaction,
};

