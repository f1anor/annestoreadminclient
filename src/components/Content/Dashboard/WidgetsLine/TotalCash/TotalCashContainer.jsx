import { fetchTotalCashForStatistic } from "actions/dashboard-actions";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTotalCashForStatistic } from "selectors/dashboard-selectors";
import TotalCash from "./TotalCash";

const TotalCashContainer = ({ ...props }) => {
  const dispatch = useDispatch();

  const cash = useSelector((state) => getTotalCashForStatistic(state));

  useEffect(() => {
    dispatch(fetchTotalCashForStatistic());
  }, [dispatch]);
  return <TotalCash cash={cash} />;
};
export default TotalCashContainer;
