import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';

import { authReducer } from './auth';
import { balanceReducer } from './balance';
import { transactionReducer } from './transactions';
import { categoriesReducer } from './categories';
import { userReducer } from './user';
import trans_month_stats_reducer from './trans_month_stats/trans_month_stats-slice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(thunk),
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['accesToken', 'refreshToken', 'sid', 'isAuthorized'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    balance: balanceReducer,
    transactions: transactionReducer,
    categories: categoriesReducer,
    user: userReducer,
    trans_month_stats: trans_month_stats_reducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
