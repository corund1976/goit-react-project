import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import categoriesActions from 'redux/categories/categoriesActions';

const incomeCategories = createReducer([], {
  [categoriesActions.getIncomeCategoriesSuccess]: (_, { payload }) => payload,
});

const expenseCategories = createReducer([], {
  [categoriesActions.getExpenseCategoriesSuccess]: (_, { payload }) => payload,
});

export default combineReducers({
  incomeCategories,
  expenseCategories,
});
