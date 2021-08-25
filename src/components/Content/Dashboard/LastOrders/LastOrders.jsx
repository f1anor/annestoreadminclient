import AnimatedCard from "Common/AnimatedCard/AnimatedCard";
import CardTitle from "Common/CardTitle/CardTitle";
import React from "react";
import css from "./LastOrders.module.css";
import List from "./List/List";

const LastOrders = ({ orders }) => {
  return (
    <AnimatedCard className={css.wrapper}>
      <CardTitle>Недавние заказы</CardTitle>
      <List orders={orders} />
    </AnimatedCard>
  );
};
export default LastOrders;
