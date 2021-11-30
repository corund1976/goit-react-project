import axios from 'axios';

axios.defaults.baseURL = 'https://kapusta-backend.goit.global';

/* Set and Unset TOKEN */
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

/* Auth */
const register = credentials => axios.post('/auth/register', credentials); //credentials={email,password}
const login = credentials => axios.post('/auth/login', credentials); //credentials={email,password}
const logout = () => axios.post('/auth/logout');
const refresh = sid => axios.post('auth/refresh'); //sid={sid}

// eslint-disable-next-line
export default {
  token,
  register,
  login,
  logout,
  refresh
};