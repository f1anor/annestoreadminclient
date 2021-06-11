import WidgetBlock from "Common/WidgetBlock/WidgetBlock";
import React from "react";
import css from "./TotalOrders.module.css";
import { ReactComponent as ArchiveIcon } from "assets/svg/archive.svg";

const TotalOrders = ({ ...props }) => {
  return (
    <WidgetBlock icon={<ArchiveIcon className={css.icon} />} title="Заказы">
      <div className={css.count}>410</div>
      <div className={css.footer}>
        <span>+0.8%</span> За неделю
      </div>
    </WidgetBlock>
  );
};
export default TotalOrders;
