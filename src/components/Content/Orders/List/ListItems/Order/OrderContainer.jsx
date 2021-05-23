import React from "react";
import Order from "./Order";
import { formatNumber } from "utils/utils";

const OrderContainer = React.memo(({ order }) => {
  let creationDate = order.creationDate ? new Date(+order.creationDate) : null;

  if (!!creationDate) {
    creationDate = `${formatNumber(creationDate.getDate(), 2)}-${formatNumber(
      creationDate.getMonth() + 1,
      2
    )}-${creationDate.getFullYear().toString().slice(-2)} ${formatNumber(
      creationDate.getHours(),
      2
    )}:${formatNumber(creationDate.getMinutes(), 2)}`;
  }

  let changeDate = order.changeDate ? new Date(+order.changeDate) : null;
  if (!!changeDate) {
    changeDate = `${formatNumber(changeDate.getDate(), 2)}-${formatNumber(
      changeDate.getMonth() + 1,
      2
    )}-${changeDate.getFullYear().toString().slice(-2)} ${formatNumber(
      changeDate.getHours(),
      2
    )}:${formatNumber(creationDate.getMinutes(), 2)}`;
  }

  const id = formatNumber(order._id, 5);

  return (
    <Order
      order={order}
      creationDate={creationDate}
      changeDate={changeDate}
      id={id}
    />
  );
});
export default OrderContainer;
