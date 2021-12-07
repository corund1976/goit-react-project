import { configureStore } from '@reduxjs/toolkit';
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
import storage from 'redux-persist/lib/storage';

import { authReducer } from './auth';
import { balanceReducer } from './balance';
import { transactionReducer } from './transactions';
import { categoriesReducer } from './categories';
import { userReducer } from './user';
import { errorReducer } from './error';
import { loaderReducer } from './loader';
import { dateReducer } from './date';
import { reportsReducer } from './reports';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken', 'refreshToken', 'sid', 'isAuthorized'],
};

const authPersistedReducer = persistReducer(authPersistConfig, authReducer);

const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  });

export const store = configureStore({
  reducer: {
    auth: authPersistedReducer,
    balance: balanceReducer,
    transactions: transactionReducer,
    categories: categoriesReducer,
    user: userReducer,
    error: errorReducer,
    loader: loaderReducer,
    date: dateReducer,
    reports: reportsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
