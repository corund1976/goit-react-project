import api from 'services/kapusta-api';

import { categoriesActions } from 'redux/categories';

const handleGetIncomeCategories = () => dispatch => {
  dispatch(categoriesActions.getIncomeCategoriesRequest());

  api
    .getIncomeCategories()
    .then(({ data }) => dispatch(categoriesActions.getIncomeCategoriesSuccess(data)))
    .catch(error => dispatch(categoriesActions.getIncomeCategoriesError(error)))
};

const handleGetExpenseCategories = () => dispatch => {
  dispatch(categoriesActions.getExpenseCategoriesRequest());

  api
    .getExpenseCategories()
    .then(({ data }) => dispatch(categoriesActions.getExpenseCategoriesSuccess(data)))
    .catch(error => dispatch(categoriesActions.getExpenseCategoriesError(error)));
};
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  handleGetIncomeCategories,
  handleGetExpenseCategories,
};
