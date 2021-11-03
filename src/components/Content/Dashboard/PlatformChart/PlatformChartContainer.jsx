import { fetchPlatformStatistic } from "actions/dashboard-actions";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getIsPlatformStatisticFetching,
  getPlatformStatistic,
} from "selectors/dashboard-selectors";
import PlatformChart from "./PlatformChart";

const PlatformChartContainer = ({ ...props }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => getPlatformStatistic(state));

  const isFetching = useSelector((state) =>
    getIsPlatformStatisticFetching(state)
  );
  useEffect(() => {
    dispatch(fetchPlatformStatistic());
  }, [dispatch]);

  return <PlatformChart data={data} isFetching={isFetching} />;
};
export default PlatformChartContainer;
