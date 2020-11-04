import React from "react";
import OrderContainer from "./Order/OrderContainer";

const ListItems = ({ orders, ...props }) => {
  return (
    <>
      {orders.map((order) => (
        <OrderContainer key={order._id} order={order} {...props} />
      ))}
    </>
  );
};

export default ListItems;
