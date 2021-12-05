import { createReducer } from '@reduxjs/toolkit';

import dateActions from 'redux/date';

const dateInitialState = null;

const dateReducer = createReducer(dateInitialState, {
  [dateActions.setDate]: (_, { payload }) => payload,
});

export default dateReducer;
