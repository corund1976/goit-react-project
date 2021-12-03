import { ResponsiveBar } from "@nivo/bar";
// import { useEffect } from "react";

import s from "./ReportChart.module.css";

function ReportChart({ arrTransactionsOfMonth, activeCategoryOfTransactions }) {
  let dataForChart = [];
  const sum = "Сумма";
  const subCategory = "Подкатегория";
  const findCategoryEqualToActive = arrTransactionsOfMonth.find(
    (item) => item[0] === activeCategoryOfTransactions
  );
  // console.log(findCategoryEqualToActive);
  if (findCategoryEqualToActive) {
    dataForChart = Object.entries(findCategoryEqualToActive[1])
      //   .splice(
      //   Object.entries(findCategoryEqualToActive[1]).findIndex(
      //     (item) => item[0] === "total"
      //   ),
      //   1
      // );
      // console.log(
      //   Object.entries(findCategoryEqualToActive[1]).findIndex(
      //     (item) => item[0] === "total"
      //   )
      // );
      // console.log(dataForChart);

      .map(([subCategoryFromArr, sumFromArr]) => {
        return {
          [subCategory]: subCategoryFromArr,
          [sum]: sumFromArr,
          // Подкатегория: subCategory,
          // Сумма: sum,
        };
      })
      .filter((item) => item[subCategory] !== "total")
      // .filter(({ Подкатегория }) => Подкатегория !== "total")

      .sort((a, b) => {
        return a[sum] - b[sum];
      });
  }
  if (!dataForChart) dataForChart = [];
  return (
    <section className={s.container}>
      {!!dataForChart.length && (
        <ResponsiveBar
          // className={s.chart}
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
      {!dataForChart.length && <p>No Data Available</p>}
    </section>
  );
}

export default ReportChart;
