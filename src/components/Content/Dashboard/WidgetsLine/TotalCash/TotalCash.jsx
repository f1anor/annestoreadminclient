import WidgetBlock from "Common/WidgetBlock/WidgetBlock";
import React from "react";
import css from "./TotalCash.module.css";
import { ReactComponent as WalletIcon } from "assets/svg/wallet2.svg";

const TotalCash = ({ ...props }) => {
  return (
    <WidgetBlock icon={<WalletIcon className={css.icon} />} title="Прибыль">
      <div className={css.count}>22870$</div>
      <div className={css.footer}>
        <span>+16%</span> За неделю
      </div>
    </WidgetBlock>
  );
};
export default TotalCash;
