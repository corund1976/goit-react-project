import api from 'services/kapusta-api';
import authActions from 'redux/actions/authActions';

const handleLogin = credentials => dispatch => {
  dispatch(authActions.loginRequest());

  api
    .login(credentials)
    .then(({ data }) => {
      // data = { message, user: { email, token, type } }
      api.token.set(data);
      dispatch(authActions.loginSuccess(data));
    })
    .catch(error => dispatch(authActions.loginError(error.message)));
};

const handleRegister = credentials => dispatch => {
  dispatch(authActions.registerRequest());

  api
    .register(credentials)
    .then(({ data }) => {
      // data = { email, id }
      dispatch(authActions.registerSuccess(data));
      // запрос на логин - сразу же после регистрации
      handleLogin(credentials)(dispatch);
    })
    .catch(error => dispatch(authActions.registerError(error.message)));
};

const handleLogout = () => dispatch => {
  dispatch(authActions.logoutRequest());

  api
    .logout()
    .then(() => {
      api.token.unset();
      dispatch(authActions.logoutSuccess());
    })
    .catch(error => dispatch(authActions.logoutError(error.message)));
};

const handleRefresh = () => (dispatch, getState) => {
  const {
    auth: { token },
  } = getState();

  if (token) {
    api.token.set(token);

    dispatch(authActions.refreshRequest());

    api
      .refresh()
      .then(({ data }) => {
        // data = { balance, email, type }
        dispatch(authActions.refreshSuccess(data));
      })
      .catch(error => dispatch(authActions.refreshError(error.message)));
  }
};

// eslint-disable-next-line
export default {
  handleRegister,
  handleLogin,
  handleLogout,
  handleRefresh,
};
