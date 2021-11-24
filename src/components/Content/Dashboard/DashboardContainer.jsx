import React from "react";
import { useSelector } from "react-redux";
import { getIsStatisticDisabled } from "selectors/dashboard-selectors";
import Dashboard from "./Dashboard";

const DashboardContainer = () => {
  const isAnim = useSelector((state) => getIsStatisticDisabled(state));
  return <Dashboard isAnim={isAnim} />;
};

export default DashboardContainer;
