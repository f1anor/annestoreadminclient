import React from "react";
import Title from "../../../Common/Title/Title";
import Chart from "./Chart/Chart";
import WidgetsLine from "./WidgetsLine/WidgetsLine";
import LayoutWrapperScroll from "Common/LayoutWrapperScroll/LayoutWrapperScroll";
import css from "./Dashboard.module.css";
import LastOrderContainer from "./LastOrders/LastOrderContainer";
import Sessions from "./Sessions/Sessions";

const Dashboard = ({ data, sessions, totalCount, isFetching }) => {
  return (
    <LayoutWrapperScroll>
      <Title anim={isFetching}>Статистика</Title>
      <WidgetsLine />
      <div className={css.chartLine}>
        <Chart data={data} isFetching={isFetching} />
        <LastOrderContainer />
      </div>
      {sessions && <Sessions sessions={sessions} totalCount={totalCount} />}
    </LayoutWrapperScroll>
  );
};

export default Dashboard;
