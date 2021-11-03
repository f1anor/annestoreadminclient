import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getChartData,
  getIsFetching,
  getIsStatisticDisabled,
  getSessions,
  getTotalCount,
} from "selectors/dashboard-selectors";
import { fetchStatistic } from "actions/dashboard-actions";
import { useQuery } from "utils/utils";
import Dashboard from "./Dashboard";

const DashboardContainer = () => {
  const isAnim = useSelector((state) => getIsStatisticDisabled(state));
  return <Dashboard isAnim={isAnim} />;
};

export default DashboardContainer;
