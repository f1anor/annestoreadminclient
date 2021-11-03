import React from "react";
import css from "./Tools.module.css";

import LayoutToolsLine from "Common/LayoutToolsLine/LayoutToolsLine";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import DeliveryFilterContainer from "./DeliveryFilter/DeliveryFilterContainer";
import DateFromFilterContainer from "Common/DateFromFilter/DateFromFilterContainer";
import DateToFilterContainer from "Common/DateToFilter/DateToFilterContainer";
import PriceFilterContainer from "Common/PriceFilter/PriceFilterContainer";

const Tools = ({ disabled, handleOpenModal }) => {
  return (
    <LayoutToolsLine>
      <DeliveryFilterContainer disabled={disabled} />
      <DateFromFilterContainer disabled={disabled} />
      <DateToFilterContainer disabled={disabled} />
      <PriceFilterContainer
        type={{ title: "Сумма от", value: "from" }}
        onOpen={() => handleOpenModal("from")}
        disabled={disabled}
      />
      <PriceFilterContainer
        type={{ title: "Сумма до", value: "to" }}
        onOpen={() => handleOpenModal("to")}
        disabled={disabled}
      />

      <Link to="/orders/all">
        <div className={css.cancel}>Сброс</div>
      </Link>
    </LayoutToolsLine>
  );
};
export default Tools;
