import React from "react";
import css from "./Metricks.module.css";

const Metricks = ({ data = [], ...props }) => {
  const totalVisitors = data.reduce(
    (acc, currentValue) => acc + currentValue.visitors,
    0
  );

  const totalOrders = data.reduce(
    (acc, currentValue) => acc + currentValue.makedOrders,
    0
  );
  return (
    <div className={css.wrapper}>
      <div className={css.item}>
        <div className={css.count}>{totalVisitors}</div>
        <div className={css.title}>Посещений</div>
      </div>
      <div className={css.item}>
        <div className={css.count}>{totalOrders}</div>
        <div className={css.title}>Заказов</div>
      </div>
    </div>
  );
};
export default Metricks;
