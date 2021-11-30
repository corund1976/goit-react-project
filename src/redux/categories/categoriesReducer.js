import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import categoriesActions from 'redux/categories/categoriesActions';

const incomeCategories = createReducer([], {
  [categoriesActions.getIncomeCategoriesSuccess]: (_, { payload }) => payload.categories,
});

const expenseCategories = createReducer([], {
  [categoriesActions.getExpenseCategoriesSuccess]: (_, { payload }) => payload.categories,
});

export default combineReducers({
  incomeCategories,
  expenseCategories,
});
