import { ResponsiveBar } from "@nivo/bar";
import { useBreakpoint } from "react-use-size";

import s from "./ReportChart.module.css";

function ReportChart({ arrTransactionsOfMonth, activeCategoryOfTransactions }) {
  let dataForChart = [];
  const isSmall = useBreakpoint(768);
  const sum = "Сумма";
  const subCategory = "Подкатегория";
  const findCategoryEqualToActive = arrTransactionsOfMonth.find(
    (item) => item[0] === activeCategoryOfTransactions
  );

  if (findCategoryEqualToActive) {
    dataForChart = Object.entries(findCategoryEqualToActive[1])
      .map(([subCategoryFromArr, sumFromArr]) => {
        return {
          [subCategory]: subCategoryFromArr,
          [sum]: sumFromArr,
        };
      })
      .filter((item) => item[subCategory] !== "total")
      .sort((a, b) => {
        if (!isSmall) {
          return b[sum] - a[sum];
        } else {
          return a[sum] - b[sum];
        }
      });
  }

  if (!dataForChart) dataForChart = [];

  return (
    <section className={s.container}>
      {!!dataForChart.length && (
        <ResponsiveBar
          data={dataForChart}
          keys={isSmall ? [sum] : [sum]}
          indexBy={isSmall ? [subCategory] : [subCategory]}
          margin={
            isSmall
              ? { top: 20, right: 35, bottom: 50, left: 80 }
              : { top: 100, right: 100, bottom: 100, left: 100 }
          }
          padding={0.7}
          valueScale={{ type: "linear" }}
          layout={isSmall ? "horizontal" : "vertical"}
          colors='#ff751d'
          animate={true}
          enableGridX={true}
          labelSkipWidth={10}
          labelSkipHeight={10}
          enableLabel={isSmall ? true : false}
          axisTop={null}
          axisRight={null}
          axisLeft={
            isSmall
              ? {
                  tickSize: 0,
                  tickPadding: 0,
                  tickRotation: 0,
                  legend: "",
                  legendPosition: "middle",
                  legendOffset: -50,
                }
              : {
                  tickSize: 0,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: "Сумма",
                  legendPosition: "middle",
                  legendOffset: -50,
                }
          }
          axisBottom={
            isSmall
              ? {
                  tickSize: 0,
                  tickPadding: 5,
                  tickRotation: -45,
                  legend: "Сумма",
                  legendPosition: "middle",
                  legendOffset: 42,
                }
              : {
                  tickSize: 0,
                  tickPadding: 5,
                  tickRotation: -45,
                  legend: "",
                  legendPosition: "middle",
                  legendOffset: 42,
                }
          }
        />
      )}
      {!dataForChart.length && <p className={s.noData}>Нет данных</p>}
    </section>
  );
}

export default ReportChart;
