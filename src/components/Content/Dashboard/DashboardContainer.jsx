import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getChartData,
  getIsFetching,
  getSessions,
  getTotalCount,
} from "selectors/dashboard-selectors";
import { fetchStatistic } from "../../../actions/dashboard-actions";
import { useQuery } from "../../../utils/utils";
import Dashboard from "./Dashboard";

const DashboardContainer = () => {
  const query = useQuery().toString();

  const dispatch = useDispatch();

  const data = useSelector((state) => getChartData(state));
  const sessions = useSelector((state) => getSessions(state));
  const totalCount = useSelector((state) => getTotalCount(state));
  const isFetching = useSelector((state) => getIsFetching(state));

  useEffect(() => {
    dispatch(fetchStatistic(query));
  }, [query, dispatch]);
  return (
    <Dashboard
      data={data}
      sessions={sessions}
      totalCount={totalCount}
      isFetching={isFetching}
    />
  );
};

export default DashboardContainer;
