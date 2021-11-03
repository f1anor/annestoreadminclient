import { fetchLastOrders } from "actions/orders-actions";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLastOrders } from "selectors/orders-selectors";
import LastOrders from "./LastOrders";

const LastOrderContainer = React.memo(() => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLastOrders());
  }, [dispatch]);
  const orders = useSelector((state) => getLastOrders(state));
  return <LastOrders orders={orders} />;
});

export default LastOrderContainer;
