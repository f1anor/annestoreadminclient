import WidgetBlock from "Common/WidgetBlock/WidgetBlock";
import React from "react";
import css from "./TotalProducts.module.css";
import { ReactComponent as BagIcon } from "assets/svg/bag.svg";

const TotalProducts = ({ products }) => {
  return (
    <WidgetBlock icon={<BagIcon className={css.icon} />} title="Продукты">
      <div className={css.count}>{products.all}</div>
      <div className={css.footer}>
        <span>+{products.last.toFixed(1)}%</span> За неделю
      </div>
    </WidgetBlock>
  );
};
export default TotalProducts;
