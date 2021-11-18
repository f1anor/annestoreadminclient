import WidgetBlock from "Common/WidgetBlock/WidgetBlock";
import React from "react";
import css from "./TotalOrders.module.css";
import { ReactComponent as ArchiveIcon } from "assets/svg/archive.svg";

const TotalOrders = ({ orders }) => {
  return (
    <WidgetBlock icon={<ArchiveIcon className={css.icon} />} title="Заказы">
      <div className={css.count}>{orders.all}</div>
      <div className={css.footer}>
        <span>+{orders.last.toFixed(1)}%</span> За неделю
      </div>
    </WidgetBlock>
  );
};
export default TotalOrders;
