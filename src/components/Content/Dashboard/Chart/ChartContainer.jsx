import { fetchStatistic } from "actions/dashboard-actions";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChartData, getIsFetching } from "selectors/dashboard-selectors";
import { useQuery } from "utils/utils";
import Chart from "./Chart";

const ChartContainer = () => {
  const query = useQuery();
  query.delete("page");
  const queryString = query.toString();

  const dispatch = useDispatch();

  const data = useSelector((state) => getChartData(state));
  const isFetching = useSelector((state) => getIsFetching(state));

  useEffect(() => {
    dispatch(fetchStatistic(queryString));
  }, [queryString, dispatch]);
  return <Chart data={data} isFetching={isFetching} />;
};
export default ChartContainer;
