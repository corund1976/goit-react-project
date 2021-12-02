import axios from "axios";

axios.defaults.baseURL = "https://kapusta-backend.goit.global";
/* TOKEN */
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};
/* Auth */
const register = (credentials) =>
  axios.post("/auth/register", credentials); //credentials={email,password}
const login = (credentials) =>
  axios.post("/auth/login", credentials); //credentials={email,password}
const logout = () => axios.post(`/auth/logout`);
const refresh = (sessionId) => axios.post("auth/refresh", sessionId); //sessionId={sid}

const setGoogleToken = () => axios.get("/auth/google");
/* Transaction */
const postIncome = (incomeItem) =>
 axios.post("/transaction/income", incomeItem); //incomeItem={description,amount,date}
const getIncome = () => axios.get("/transaction/income");

const postExpense = (expenseItem) =>
  axios.post("/transaction/expense", expenseItem); //expenseItem={description,amount,date,category}
const getExpense = () => axios.get("/transaction/expense");

const deleteTransaction = (transactionId) => axios.delete(`/transaction/${transactionId}`);

const getIncomeCategories = () => axios.get("/transaction/income-categories");
const getExpenseCategories = () => axios.get("/transaction/expense-categories");

const getPeriodData = (date) => axios.get(`/transaction/period-data?date=${date}`); //date=YYYY-MM
/* User */
const updateUserBalance = (balance) => axios.patch("/user/balance", balance); //balance={newBalance: balance}
const getUserInfo = () => axios.get("/user");
// eslint-disable-next-line
export default {
  token,
  // Auth
  register,
  login,
  logout,
  refresh,
  setGoogleToken,
  // Transaction
  postIncome,
  getIncome,
  postExpense,
  getExpense,
  deleteTransaction,
  getIncomeCategories,
  getExpenseCategories,
  getPeriodData,
  // User
  updateUserBalance,
  getUserInfo,
};
