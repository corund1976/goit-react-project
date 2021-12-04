import { useSelector } from "react-redux";
import s from "../ReportPage/ReportPage.module.css";
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

function ReportPage() {
  const [activeTypeOfTransactions, setActiveTypeOfTransactions] =
    useState("Расходы");
  const [activeCategoryOfTransactions, setActiveCategoryOfTransaction] =
    useState("");

  const arrEexpensesOfMonth = useSelector(expensesOfMonthSelector);
  const arrIncomesOfMonth = useSelector(incomesOfMonthSelector);

  const arrForMarkup =
    activeTypeOfTransactions === "Расходы"
      ? arrEexpensesOfMonth
      : arrIncomesOfMonth;
  const arrTransactionsOfMonth =
    arrForMarkup === undefined ? [] : Object.entries(arrForMarkup);

  const handleChangeCategory = () => {
    activeTypeOfTransactions === "Расходы"
      ? setActiveTypeOfTransactions("Доходы")
      : setActiveTypeOfTransactions("Расходы");
  };

  const toggleActiveCategory = (e) => {
    setActiveCategoryOfTransaction(e.target.closest("LI").dataset.id);
  };
  useEffect(() => {
    if (arrTransactionsOfMonth.length) {
      setActiveCategoryOfTransaction(arrTransactionsOfMonth[0][0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [arrEexpensesOfMonth, arrIncomesOfMonth, activeTypeOfTransactions]);
  return (
    <Section>
      <div className={s.reportHeaderBalance}>
        <GoBack />
        <div className={s.calendarBalanceBox}>
          <Balance displayStyle={false} />
          <Calendar />
        </div>
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
