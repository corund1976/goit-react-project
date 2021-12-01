export const incomesOfMonthSelector = ({ trans_month_stats }) =>
  trans_month_stats?.data.incomes?.incomesData;
export const expensesOfMonthSelector = ({ trans_month_stats }) =>
  trans_month_stats?.data.expenses?.expensesData;

export const totalIncomesOfMonthSelector = ({ trans_month_stats }) =>
  trans_month_stats?.data.incomes?.incomeTotal;
export const totalExpensesOfMonthSelector = ({ trans_month_stats }) =>
  trans_month_stats?.data.expenses?.expenseTotal;
