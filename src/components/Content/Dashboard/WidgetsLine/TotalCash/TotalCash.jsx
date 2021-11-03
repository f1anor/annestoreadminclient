import WidgetBlock from "Common/WidgetBlock/WidgetBlock";
import React from "react";
import css from "./TotalCash.module.css";
import { ReactComponent as WalletIcon } from "assets/svg/wallet2.svg";

const TotalCash = ({ cash }) => {
  return (
    <WidgetBlock icon={<WalletIcon className={css.icon} />} title="Прибыль">
      <div className={css.count}>{cash.all}₽</div>
      <div className={css.footer}>
        <span>+{cash.last}%</span> За неделю
      </div>
    </WidgetBlock>
  );
};
export default TotalCash;
