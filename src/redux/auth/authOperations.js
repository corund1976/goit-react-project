import api from "services/kapusta-api";
import authActions from "redux/auth/authActions";
import transactionOperations from 'redux/transactions/transactionOperations';
import categoriesOperations from 'redux/categories/categoriesOperations';

const handleLogin = (credentials) => (dispatch) => {
  dispatch(authActions.loginRequest());

  api
    .login(credentials)
    .then(({ data }) => {
      // data = {
      //   accessToken,
      //   refreshToken,
      //   sid,
      //   userData: {
      //     email,
      //     balance,
      //     id,
      //     transactions: [
      //       {
      //         description,
      //         category,
      //         amount,
      //         date,
      //         _id,
      //       }
      //     ]
      //   }
      // }
      api.token.set(data.accessToken);
      dispatch(authActions.loginSuccess(data));
      dispatch(transactionOperations.handleGetIncome());
      dispatch(transactionOperations.handleGetExpense());
      dispatch(categoriesOperations.handleGetIncomeCategories());
      dispatch(categoriesOperations.handleGetExpenseCategories());
    })
    .catch((error) => dispatch(authActions.loginError(error.message)));
};

const handleRegister = (credentials) => (dispatch) => {
  dispatch(authActions.registerRequest());

  api
    .register(credentials)
    .then(({ data }) => {
      // data = { email, id }
      dispatch(authActions.registerSuccess(data));
      // запрос на логин - сразу же после регистрации
      handleLogin(credentials)(dispatch);
    })
    .catch((error) => dispatch(authActions.registerError(error.message)));
};

const handleLogout = () => (dispatch) => {
  dispatch(authActions.logoutRequest());

  api
    .logout()
    .then(() => {
      api.token.unset();
      dispatch(authActions.logoutSuccess());
    })
    .catch((error) => dispatch(authActions.logoutError(error.message)));
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
        // data = { newAccessToken, newRefreshToken, newSid }
        dispatch(authActions.refreshSuccess(data));
      })
      .catch((error) => dispatch(authActions.refreshError(error.message)));
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
    .catch((error) => dispatch(authActions.setGoogleTokenError(error.message)));
};

// eslint-disable-next-line
export default {
  handleRegister,
  handleLogin,
  handleLogout,
  handleRefresh,
  handleGoogleAuth,
};
