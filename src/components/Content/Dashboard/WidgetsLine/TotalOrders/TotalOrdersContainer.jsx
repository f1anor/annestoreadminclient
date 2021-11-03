import { fetchOrdersForStatistic } from "actions/dashboard-actions";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrdersForStatistic } from "selectors/dashboard-selectors";
import TotalOrders from "./TotalOrders";

const TotalOrdersContainer = ({ ...props }) => {
  const dispatch = useDispatch();

  const orders = useSelector((state) => getOrdersForStatistic(state));
  useEffect(() => {
    dispatch(fetchOrdersForStatistic());
  }, [dispatch]);
  return <TotalOrders orders={orders} />;
};
export default TotalOrdersContainer;
