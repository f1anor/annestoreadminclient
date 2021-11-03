import React from "react";
import Title from "../../../Common/Title/Title";
import WidgetsLine from "./WidgetsLine/WidgetsLine";
import LayoutWrapperScroll from "Common/LayoutWrapperScroll/LayoutWrapperScroll";
import css from "./Dashboard.module.css";
import LastOrderContainer from "./LastOrders/LastOrderContainer";
import SessionsContainer from "./Sessions/SessionsContainer";
import PlatformChartContainer from "./PlatformChart/PlatformChartContainer";
import ChartContainer from "./Chart/ChartContainer";

const Dashboard = ({ isAnim }) => {
  return (
    <LayoutWrapperScroll>
      <Title anim={isAnim}>Статистика</Title>
      <WidgetsLine />
      <div className={css.chartLine}>
        <ChartContainer />
        <LastOrderContainer />
      </div>
      <div className={[css.chartLine, css.second].join(" ")}>
        <PlatformChartContainer />
        <SessionsContainer />
      </div>
    </LayoutWrapperScroll>
  );
};

export default Dashboard;
