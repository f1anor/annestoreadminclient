import React from "react";
import Order from "./Order";
import { formatNumber } from "utils/utils";
import { useDispatch } from "react-redux";
import { setModalOrderManagerNotes } from "actions/orders-actions";

const OrderContainer = React.memo(({ order, ...props }) => {
  const dispatch = useDispatch();
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

  const id = formatNumber(order._id, 5);

  const handleSetModalNotes = () => {
    dispatch(setModalOrderManagerNotes(id));
  };

  return (
    <Order
      order={order}
      creationDate={creationDate}
      handleSetModalNotes={handleSetModalNotes}
      id={id}
      {...props}
    />
  );
});
export default OrderContainer;
