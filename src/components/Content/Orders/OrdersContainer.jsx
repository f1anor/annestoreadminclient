import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Orders from "./Orders";
import { getOrdDisabled } from "selectors/orders-selectors";
import { useQuery } from "utils/utils";
import { fetchOrders } from "actions/orders-actions";
import { useParams } from "react-router-dom";
import { getPageSize } from "selectors/app-selectors";

const OrdersContainer = React.memo(({ ...props }) => {
  const isDisabled = useSelector((state) => getOrdDisabled(state));
  const pageSize = useSelector((state) => getPageSize(state));
  const dispatch = useDispatch();

  const query = useQuery().toString();
  const { type } = useParams();

  useEffect(() => {
    dispatch(fetchOrders(type, query, pageSize));
  }, [dispatch, type, query, pageSize]);

  return <Orders {...props} />;
});

export default OrdersContainer;
