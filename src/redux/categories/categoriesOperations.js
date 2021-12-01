import api from 'services/kapusta-api';
import categoriesActions from 'redux/categories/categoriesActions';

const handleGetIncomeCategories = () => dispatch => {
  dispatch(categoriesActions.getIncomeCategoriesRequest());

  api
    .getIncomeCategories()
    .then(({ data }) => console.log(data))
    // .then(({ data }) => dispatch(categoriesActions.getIncomeCategoriesSuccess(data)))
    .catch(error => dispatch(categoriesActions.getIncomeCategoriesError(error.message)))
};

const handleGetExpenseCategories = () => dispatch => {
  dispatch(categoriesActions.getExpenseCategoriesRequest());

  api
    .getExpenseCategories()
    .then(({ data }) => dispatch(categoriesActions.getExpenseCategoriesSuccess(data)))
    .catch(error => dispatch(categoriesActions.getExpenseCategoriesError(error.message)));
};
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  handleGetIncomeCategories,
  handleGetExpenseCategories,
};
