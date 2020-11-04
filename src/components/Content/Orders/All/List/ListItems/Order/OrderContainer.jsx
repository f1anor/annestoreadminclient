import React from "react";
import Order from "./Order";
import { convertStatus, useQuery } from "utils/utils";

import { changeStatus } from "actions/orders-actions";
import { connect } from "react-redux";

const OrderContainer = ({ changeStatus, order, ...props }) => {
  const query = useQuery();
  const sum = order.products
    .map((product) => product.price * product.amount)
    .reduce((acc, current) => acc + current);

  const status = convertStatus(order.status);
  const allStatus = [
    "new",
    "process",
    "warning",
    "success",
    "complited",
    "deleted",
  ].map((status) => convertStatus(status));

  const handleChangeStatus = (value) => {
    changeStatus(order._id, value, query);
  };

  return (
    <Order
      allStatus={allStatus}
      status={status}
      order={order}
      sum={sum}
      handleChangeStatus={handleChangeStatus}
      {...props}
    />
  );
};

export default connect(null, { changeStatus })(OrderContainer);
