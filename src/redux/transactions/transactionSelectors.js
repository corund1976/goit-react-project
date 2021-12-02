// Массив транзакций доходов / расходов
export const getIncomeTransactions = state => state.transactions.incomes;
export const getExpenseTransactions = state => state.transactions.expenses;
// Статистика помесячно доходов / расходов
export const getIncomeMonthStats = state => state.transactions.incomeMonthStats;
export const getExpenseMonthStats = state => state.transactions.expenseMonthStats
// Массив всех транзакций
export const getAllTransactions = state => state.transactions.transactions;