import React from "react";
import TotalCashContainer from "./TotalCash/TotalCashContainer";
import TotalOrdersContainer from "./TotalOrders/TotalOrdersContainer";
import TotalProductsContainer from "./TotalProducts/TotalProductsContainer";
import TotalUsersContainer from "./TotalUsers/TotalUsersContainer";
import css from "./WidgetsLine.module.css";

const WidgetsLine = () => {
  return (
    <div className={css.wrapper}>
      <TotalUsersContainer />
      <TotalProductsContainer />
      <TotalOrdersContainer />
      <TotalCashContainer />
    </div>
  );
};
export default WidgetsLine;
