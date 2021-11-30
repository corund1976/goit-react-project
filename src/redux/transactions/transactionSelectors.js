export const getAllransactions = state => state.auth.user.userData.transactions;
// const getAllTransactions = state => state.transactions;
export const getIncomeTransactions = state => state.transactions.incomes;
export const getExpenseTransactions = state => state.transactions.expenses;