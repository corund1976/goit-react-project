import PageTitle from "components/PageTitle/PageTitle";
import { useSelector } from "react-redux";
import { ResponsiveBar } from "@nivo/bar";
import {
  expensesOfMonthSelector,
  incomesOfMonthSelector,
} from "redux/trans_month_stats/trans_month_stats-selectors";
import s from "./ReportChart.module.css";

function ReportChart({ activeCategory, activeTrancaction }) {
  const arrExpenses = useSelector(expensesOfMonthSelector);
  const arrIncomes = useSelector(incomesOfMonthSelector);
  let dataForChart = [];

  const arrForFilter =
    activeTrancaction === "Расходы" ? arrExpenses : arrIncomes;

  const selectedCategoryToArray =
    arrForFilter === undefined ? [] : Object.entries(arrForFilter);

  const findCategoryEqualToActive = selectedCategoryToArray.find(
    (item) => item[0] === activeCategory
  );
  if (findCategoryEqualToActive) {
    dataForChart = Object.entries(findCategoryEqualToActive[1])
      .splice(1)
      .map((item) => {
        return {
          Подкатегория: item[0],
          Сумма: item[1],
        };
      })
      .sort((a, b) => {
        return a.Сумма - b.Сумма;
      });
  }
  if (!dataForChart) dataForChart = [];

  return (
    <section className={s.chart}>
      {!!dataForChart.length && (
        <ResponsiveBar
          className={s.chart}
          data={dataForChart}
          keys={["Сумма"]}
          indexBy='Подкатегория'
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          padding={0.8}
          valueScale={{ type: "linear" }}
          colors='#ff751d'
          animate={true}
          enableLabel={false}
          axisTop={null}
          axisRight={null}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Сумма",
            legendPosition: "middle",
            legendOffset: -40,
          }}
        />
      )}
    </section>
  );
}

export default ReportChart;
