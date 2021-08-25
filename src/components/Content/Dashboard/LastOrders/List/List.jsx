import React from "react";
import ItemContainer from "./Item/ItemContainer";
import css from "./List.module.css";

const List = ({ orders = [] }) => {
  return (
    <ul className={css.wrapper}>
      {orders.map((order) => (
        <ItemContainer key={order._id} order={order} />
      ))}
    </ul>
  );
};
export default List;
