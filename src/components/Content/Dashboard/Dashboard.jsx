import React from "react";
import css from "./Dashboard.module.css";
import Title from "../../../Common/Title/Title";
import Chart from "./Chart/Chart";
import ControllsContainer from "./Controlls/ControllsContainer";
import SessionsTable from "./SessionsTable/SessionsTable";

const Dashboard = ({ data, sessions, totalCount, isFetching }) => {
  return (
    <div className={css.wrapper}>
      <div className={css.header}>
        <Title anim={isFetching}>Статистика</Title>
      </div>
      <Chart data={data} isFetching={isFetching} />
      <ControllsContainer />
      {sessions && (
        <SessionsTable sessions={sessions} totalCount={totalCount} />
      )}
    </div>
  );
};

export default Dashboard;
