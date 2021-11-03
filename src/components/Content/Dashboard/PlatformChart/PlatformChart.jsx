import AnimatedCard from "Common/AnimatedCard/AnimatedCard";
import CardTitle from "Common/CardTitle/CardTitle";
import React from "react";
import Legend from "./Legend/Legend";
import css from "./PlatformChart.module.css";
import PlatformPieChart from "./PlatformPieChart/PlatformPieChart";

const PlatformChart = React.memo(({ data, isFetching }) => {
  // const data1 = [
  //   { name: "Desktop", value: 30 },
  //   { name: "Mobile", value: 70 },
  // ];

  // const data2 = [
  //   { name: "Chrome на Microsoft Windows", value: 40 },
  //   { name: "Chrome на Apple Mac", value: 10 },
  //   { name: "Safari на Apple iOS", value: 20 },
  //   { name: "Firefox на Linux", value: 5 },
  //   { name: "Chrome на Google Android", value: 15 },
  //   { name: "Firefox на Microsoft Windows", value: 10 },
  // ];

  const COLORS1 = ["#FE9E9E", "#9DE2F8"];

  const COLORS2 = [
    "#FE8586",
    "#4E4CE6",
    "#3B8BA3",
    "#FF365F",
    "#FF9F0A",
    "#2092FD",
  ];
  return (
    <AnimatedCard className={css.wrapper}>
      <CardTitle>Платформа</CardTitle>
      {!isFetching && (
        <div className={css.chartWrapper}>
          <PlatformPieChart data={data} COLORS1={COLORS1} COLORS2={COLORS2} />

          <Legend data={data.global} COLORS={COLORS1} />
        </div>
      )}

      <Legend data={data.details} COLORS={COLORS2} />
    </AnimatedCard>
  );
});
export default PlatformChart;
