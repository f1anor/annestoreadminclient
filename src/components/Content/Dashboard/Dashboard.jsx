import React from "react";
import Title from "../../../Common/Title/Title";
import Chart from "./Chart/Chart";
import ControllsContainer from "./Controlls/ControllsContainer";
import SessionsTable from "./SessionsTable/SessionsTable";
import LayoutWrapper from "Common/LayoutWrapper/LayoutWrapper";
import WidgetsLine from "./WidgetsLine/WidgetsLine";

const Dashboard = ({ data, sessions, totalCount, isFetching }) => {
  return (
    <LayoutWrapper>
      <Title anim={isFetching}>Статистика</Title>
      <WidgetsLine />
      <Chart data={data} isFetching={isFetching} />
      <ControllsContainer />
      {sessions && (
        <SessionsTable sessions={sessions} totalCount={totalCount} />
      )}
    </LayoutWrapper>
  );
};

export default Dashboard;
