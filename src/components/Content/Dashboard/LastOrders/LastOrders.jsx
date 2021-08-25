import AnimatedCard from "Common/AnimatedCard/AnimatedCard";
import CardTitle from "Common/CardTitle/CardTitle";
import React from "react";
import { Link } from "react-router-dom";
import css from "./LastOrders.module.css";
import List from "./List/List";

const LastOrders = ({ orders }) => {
  return (
    <AnimatedCard className={css.wrapper}>
      <div className={css.inner}>
        <CardTitle>Недавние заказы</CardTitle>
        <List orders={orders} />
      </div>
      <button className={css.button}>
        <Link to="/orders/all?page=1">Показать все</Link>
      </button>
    </AnimatedCard>
  );
};
export default LastOrders;
