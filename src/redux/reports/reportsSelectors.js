const incomesOfMonthSelector = ({ reports }) =>
  reports?.data.incomes?.incomesData;
const expensesOfMonthSelector = ({ reports }) =>
  reports?.data.expenses?.expensesData;

const totalIncomesOfMonthSelector = ({ reports }) =>
  reports?.data.incomes?.incomeTotal;
const totalExpensesOfMonthSelector = ({ reports }) =>
  reports?.data.expenses?.expenseTotal;

const isLoadingSelector = ({ reports }) =>
  reports?.isLoading;
const errorSelector = ({ reports }) =>
  reports?.error;
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  incomesOfMonthSelector,
  expensesOfMonthSelector,
  totalIncomesOfMonthSelector,
  totalExpensesOfMonthSelector,
  isLoadingSelector,
  errorSelector
};
