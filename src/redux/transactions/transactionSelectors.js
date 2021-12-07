// Массив транзакций доходов / расходов
const getIncomeTransactions = state => state.transactions.incomes;
const getExpenseTransactions = state => state.transactions.expenses;
// Статистика помесячно доходов / расходов
const getIncomeMonthStats = state => state.transactions.incomeMonthStats;
const getExpenseMonthStats = state => state.transactions.expenseMonthStats
// Массив всех транзакций
const getAllTransactions = state => state.transactions.transactions;
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getIncomeTransactions,
  getExpenseTransactions,
  getIncomeMonthStats,
  getExpenseMonthStats,
  getAllTransactions,
};