import React from "react";
import css from "./PriceFilter.module.css";
import { ReactComponent as WalletIcon } from "assets/svg/wallet2.svg";

const PriceFilter = ({ value, handleOpenModal, title, disabled }) => {
  return (
    <button
      className={css.dateWrapper}
      onClick={handleOpenModal}
      disabled={disabled}
    >
      <WalletIcon />
      Сумма {title}: <span>{value ? value + "₽" : null || "Нет"}</span>
    </button>
  );
};
export default PriceFilter;
