import React from "react";
import css from "./PriceFilter.module.css";
import { ReactComponent as WalletIcon } from "assets/svg/wallet2.svg";

const PriceFilter = ({ value, handleOpenModal, title }) => {
  return (
    <div className={css.dateWrapper} onClick={handleOpenModal}>
      <WalletIcon />
      Сумма {title}: <span>{value ? value + "₽" : null || "Нет"}</span>
    </div>
  );
};
export default PriceFilter;
