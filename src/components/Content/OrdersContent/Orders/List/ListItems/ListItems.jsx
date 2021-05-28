import React from "react";
import OrderContainer from "./Order/OrderContainer";
import EmptySlots from "Common/EmptySlots/EmptySlots";

const ListItems = ({ orders, pageSize, ...props }) => {
  return (
    <tbody>
      {orders.map((order) => (
        <OrderContainer key={order._id} order={order} {...props} />
      ))}
      <EmptySlots rows={+pageSize - orders.length} cells={9} />
    </tbody>
  );
};

export default ListItems;
