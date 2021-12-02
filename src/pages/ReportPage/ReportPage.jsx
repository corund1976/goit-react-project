import { useSelector } from "react-redux";

import Section from "components/Section";
import GoBack from "components/GoBack";
import Balance from "components/Balance";
import Calendar from "components/Calendar";
import IncomeExpenseTotal from "components/IncomeExpenseTotal";
import ReportSwitch from "components/ReportSwitch";
import ReportChart from "components/ReportChart";
import { useEffect, useState } from "react";
import {
  expensesOfMonthSelector,
  incomesOfMonthSelector,
} from "redux/trans_month_stats/trans_month_stats-selectors";

// import s from './ReportPage.module.css';

function ReportPage() {
  const [activeTypeOfTransactions, setActiveTypeOfTransactions] =
    useState("Расходы");
  const [activeCategoryOfTransactions, setActiveCategoryOfTransaction] =
    useState("");

  const arrEexpensesOfMonth = useSelector(expensesOfMonthSelector);
  const arrIncomesOfMonth = useSelector(incomesOfMonthSelector);

  // const [stateq, useStateq] = useState(false);

  const arrForMarkup =
    activeTypeOfTransactions === "Расходы"
      ? arrEexpensesOfMonth
      : arrIncomesOfMonth;
  const arrTransactionsOfMonth =
    arrForMarkup === undefined ? [] : Object.entries(arrForMarkup);
  // console.log(arrTransactionsOfMonth[0][0]);
  // console.log(arrTransactionsOfMonth);
  const handleChangeCategory = () => {
    activeTypeOfTransactions === "Расходы"
      ? setActiveTypeOfTransactions("Доходы")
      : setActiveTypeOfTransactions("Расходы");
  };

  const toggleActiveCategory = (e) => {
    setActiveCategoryOfTransaction(e.target.closest("LI").dataset.id);
  };
  useEffect(() => {
    if (arrTransactionsOfMonth.length > 0) {
      setActiveCategoryOfTransaction(arrTransactionsOfMonth[0][0]);
    }
  }, [arrEexpensesOfMonth, arrIncomesOfMonth, activeTypeOfTransactions]);
  return (
    <Section>
      <div>
        <GoBack />
        <Balance />
        <Calendar />
      </div>
      <IncomeExpenseTotal />
      <ReportSwitch
        activeTypeOfTransactions={activeTypeOfTransactions}
        activeCategoryOfTransactions={activeCategoryOfTransactions}
        handleChangeCategory={handleChangeCategory}
        toggleActiveCategory={toggleActiveCategory}
        arrTransactionsOfMonth={arrTransactionsOfMonth}
      />
      <ReportChart
        arrTransactionsOfMonth={arrTransactionsOfMonth}
        activeCategoryOfTransactions={activeCategoryOfTransactions}
      />
    </Section>
  );
}

export default ReportPage;
