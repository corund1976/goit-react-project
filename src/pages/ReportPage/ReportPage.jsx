// import { useSelector } from 'react-redux';

import Section from "components/Section";
import GoBack from "components/GoBack";
import Balance from "components/Balance";
import Calendar from "components/Calendar";
import IncomeExpenseTotal from "components/IncomeExpenseTotal";
import ReportSwitch from "components/ReportSwitch";
import ReportChart from "components/ReportChart";
import { useState } from "react";

// import s from './ReportPage.module.css';

function ReportPage() {
  const [activeCategory, setActiveCategory] = useState("");
  const [activeTrancaction, setActiveTrancaction] = useState("");

  const getActiveCategory = (category, typeOfTrancaction) => {
    setActiveCategory(category);
    setActiveTrancaction(typeOfTrancaction);
  };
  return (
    <Section>
      <div>
        <GoBack />
        <Balance />
        <Calendar />
      </div>

      <IncomeExpenseTotal />
      <ReportSwitch getActiveCategory={getActiveCategory} />
      <ReportChart
        activeCategory={activeCategory}
        activeTrancaction={activeTrancaction}
      />
    </Section>
  );
}

export default ReportPage;
