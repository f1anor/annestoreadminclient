import Structure from "Common/Structure/Structure";
import React from "react";
import css from "./Item.module.css";

const Item = ({ order, timeAgo, handleSetImg }) => {
  return (
    <div className={css.wrapper}>
      <div className={css.structure}>
        <Structure products={order.products} onClick={handleSetImg} />
      </div>

      <div className={css.info}>
        <div className={css.name}>{order.name}</div>
        <div className={css.time}>{timeAgo}</div>
      </div>
      <div className={css.price}>+ {order.price} ₽</div>
    </div>
  );
};
export default Item;
