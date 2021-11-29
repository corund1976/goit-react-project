import { useSelector } from "react-redux";

import Container from "components/Container";
import GoBack from "components/GoBack";
import Balance from "components/Balance";
import Calendar from "components/Calendar";
import IncomeExpenseTotal from "components/IncomeExpenseTotal";
import ReportSwitch from "components/ReportSwitch";
import ReportChart from "components/ReportChart";

import s from "./ReportPage.module.scss";

function ReportPage() {
  return (
    <Container>
      <div>
        <GoBack />
        <Balance />
        <Calendar />
      </div>

      <IncomeExpenseTotal />
      <ReportSwitch />
      <ReportChart />
    </Container>
  );
}

export default ReportPage;
