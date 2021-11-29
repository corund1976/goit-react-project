import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from 'redux/auth/reducers/authReducer';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'isAuthenticated', 'user'],
};

export default combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
});
