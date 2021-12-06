import api from "services/kapusta-api";
import authActions from "redux/auth/authActions";
import transactionOperations from 'redux/transactions/transactionOperations';
import categoriesOperations from 'redux/categories/categoriesOperations';

const handleLogin = (credentials) => (dispatch) => {
  dispatch(authActions.loginRequest());

  api
    .login(credentials)
    .then(({ data }) => {
      api.token.set(data.accessToken);
      dispatch(authActions.loginSuccess(data));
      dispatch(transactionOperations.handleGetIncome());
      dispatch(transactionOperations.handleGetExpense());
      dispatch(categoriesOperations.handleGetIncomeCategories());
      dispatch(categoriesOperations.handleGetExpenseCategories());
    })
    .catch((error) => dispatch(authActions.loginError(error)));
};

const handleRegister = (credentials) => (dispatch) => {
  dispatch(authActions.registerRequest());

  api
    .register(credentials)
    .then(({ data }) => {
      dispatch(authActions.registerSuccess(data));
      handleLogin(credentials)(dispatch);
    })
    .catch((error) => dispatch(authActions.registerError(error)));
};

const handleLogout = () => dispatch => {
  dispatch(authActions.logoutRequest());

  api
    .logout()
    .then(() => {
      api.token.unset();
      dispatch(authActions.logoutSuccess());
    })
    .catch((error) => dispatch(authActions.logoutError(error)));
};

const handleRefresh = (sessionId) => (dispatch, getState) => {
  const {
    auth: { accessToken, refreshToken },
  } = getState();

  if (accessToken) {
    api.token.set(refreshToken);
    dispatch(authActions.refreshRequest());
    api
      .refresh(sessionId)
      .then(({ data }) => {
        api.token.set(data.newAccessToken);
        dispatch(authActions.refreshSuccess(data));
      })
      .catch((error) => dispatch(authActions.refreshError(error)));
  }
};

const handleGoogleAuth = (token) => (dispatch) => {
  dispatch(authActions.setGoogleTokenRequest());
  api.token.set(token);
  api
    .setGoogleToken()
    .then(({ data }) => {
      console.log({ data }, "assadasdasdasdasd");
      api.token.set(data.accessToken);
      dispatch(authActions.setGoogleTokenSuccess(data));
    })
    .catch((error) => dispatch(authActions.setGoogleTokenError(error)));
};
// eslint-disable-next-line
export default {
  handleRegister,
  handleLogin,
  handleLogout,
  handleRefresh,
  handleGoogleAuth,
};
