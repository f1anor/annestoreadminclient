import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Orders from "./Orders";
import { getOrdDisabled, getTotalCount } from "selectors/orders-selectors";
import { useQuery } from "utils/utils";
import { fetchOrders } from "actions/orders-actions";
import { useParams } from "react-router-dom";
import { getPageSize } from "selectors/app-selectors";
import { useLocation } from "react-router-dom";

const OrdersContainer = React.memo(({ ...props }) => {
  const isDisabled = useSelector((state) => getOrdDisabled(state));
  const pageSize = useSelector((state) => getPageSize(state));
  const totalCount = useSelector((state) => getTotalCount(state));
  const dispatch = useDispatch();

  const query = useQuery().toString();
  const pathName = useLocation().pathname;
  const { type } = useParams();
  useEffect(() => {
    dispatch(fetchOrders(type, query, pageSize));
  }, [dispatch, type, query, pageSize]);

  return (
    <Orders
      pageSize={pageSize}
      totalCount={totalCount}
      pathName={pathName}
      {...props}
    />
  );
});

export default OrdersContainer;
