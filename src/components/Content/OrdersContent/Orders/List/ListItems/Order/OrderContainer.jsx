import React from "react";
import Order from "./Order";
import { formatNumber, tableDate } from "utils/utils";
import { useDispatch } from "react-redux";
import { setModalOrderManagerNotes } from "actions/orders-actions";
import { setImg } from "actions/app-actions";

const OrderContainer = React.memo(({ order, ...props }) => {
  const dispatch = useDispatch();
  const creationDate = tableDate(order.creationDate);

  const id = formatNumber(order._id, 5);

  const handleSetModalNotes = () => {
    dispatch(setModalOrderManagerNotes(id));
  };

  const handleSetImg = (arr) => {
    dispatch(setImg(arr));
  };

  return (
    <Order
      order={order}
      creationDate={creationDate}
      handleSetModalNotes={handleSetModalNotes}
      id={id}
      handleSetImg={handleSetImg}
      {...props}
    />
  );
});
export default OrderContainer;
