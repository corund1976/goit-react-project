import api from "services/kapusta-api";
import transactionActions from "redux/transactions/transactionActions";
import { userOperations } from "redux/user";

const handlePostIncome = (data) => (dispatch) => {
  dispatch(transactionActions.postIncomeRequest());

  api
    .postIncome(data)
    .then(({ data }) => {
      dispatch(transactionActions.postIncomeSuccess(data));
    })
    .then(() => {
      dispatch(handleGetIncome());
    })
    .catch((error) =>
      dispatch(transactionActions.postIncomeError(error))
    );
};

const handleGetIncome = () => (dispatch) => {
  dispatch(transactionActions.getIncomeRequest());

  api
    .getIncome()
    .then(({ data }) => dispatch(transactionActions.getIncomeSuccess(data)))
    .catch((error) =>
      dispatch(transactionActions.getIncomeError(error))
    );
};

const handleDeleteIncome = (transactionId) => (dispatch) => {
  dispatch(transactionActions.deleteIncomeRequest());

  api
    .deleteTransaction(transactionId)
    .then(({ data }) =>
      dispatch(transactionActions.deleteIncomeSuccess({ data, transactionId }))
    )
    .then(() => {
      dispatch(handleGetIncome());
    })
    .catch((error) =>
      dispatch(transactionActions.deleteIncomeError(error))
    );
};

const handlePostExpense = (data) => (dispatch) => {
  dispatch(transactionActions.postExpenseRequest());

  api
    .postExpense(data)
    .then(({ data }) => dispatch(transactionActions.postExpenseSuccess(data)))
    .then(() => {
      dispatch(handleGetExpense());
    })
    .catch((error) =>
      dispatch(transactionActions.postExpenseError(error))
    );
};

const handleGetExpense = () => (dispatch) => {
  dispatch(transactionActions.getExpenseRequest());

  api
    .getExpense()
    .then(({ data }) => dispatch(transactionActions.getExpenseSuccess(data)))
    .catch((error) =>
      dispatch(transactionActions.getExpenseError(error))
    );
};

const handleDeleteExpense = (transactionId) => (dispatch) => {
  dispatch(transactionActions.deleteExpenseRequest());

  api
    .deleteTransaction(transactionId)
    .then(({ data }) =>
      dispatch(transactionActions.deleteExpenseSuccess({ data, transactionId }))
    )
    .then(() => {
      dispatch(handleGetExpense());
    })
    .catch((error) =>
      dispatch(transactionActions.deleteExpenseError(error))
    );
};

const handleDeleteTransaction = (transactionId) => (dispatch) => {
  dispatch(transactionActions.deleteTransactionRequest());

  api
    .deleteTransaction(transactionId)
    .then(({ data }) =>
      dispatch(transactionActions.deleteTransactionSuccess({ data, transactionId }))
    )
    .then(() => {
      dispatch(handleGetIncome());
      dispatch(handleGetExpense());
      dispatch(userOperations.handleGetUserInfo());
    })
    .catch((error) =>
      dispatch(transactionActions.deleteTransactionError(error))
    );
};
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  handlePostIncome,
  handleGetIncome,
  handleDeleteIncome,
  handlePostExpense,
  handleGetExpense,
  handleDeleteExpense,
  handleDeleteTransaction,
};
