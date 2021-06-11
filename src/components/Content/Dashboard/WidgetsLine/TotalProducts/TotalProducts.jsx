import WidgetBlock from "Common/WidgetBlock/WidgetBlock";
import React from "react";
import css from "./TotalProducts.module.css";
import { ReactComponent as BagIcon } from "assets/svg/bag.svg";

const TotalProducts = ({ ...props }) => {
  return (
    <WidgetBlock icon={<BagIcon className={css.icon} />} title="Продукты">
      <div className={css.count}>321</div>
      <div className={css.footer}>
        <span>+1.7%</span> За неделю
      </div>
    </WidgetBlock>
  );
};
export default TotalProducts;
