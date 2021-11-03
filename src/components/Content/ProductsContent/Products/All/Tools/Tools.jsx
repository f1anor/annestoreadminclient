import DateFromFilterContainer from "Common/DateFromFilter/DateFromFilterContainer";
import DateToFilterContainer from "Common/DateToFilter/DateToFilterContainer";
import LayoutToolsLine from "Common/LayoutToolsLine/LayoutToolsLine";
import React from "react";
import CategoryFilterContainer from "./CategoryFilter/CategoryFilterContainer";
import PriceFilterContainer from "Common/PriceFilter/PriceFilterContainer";
import { Link } from "react-router-dom";
import css from "./Tools.module.css";

const Tools = ({ isProdDisabled, handleOpenModal }) => {
  return (
    <LayoutToolsLine>
      <CategoryFilterContainer />
      <DateFromFilterContainer disabled={isProdDisabled} />
      <DateToFilterContainer disabled={isProdDisabled} />
      <PriceFilterContainer
        type={{ title: "Цена от", value: "from" }}
        onOpen={() => handleOpenModal("from")}
        disabled={isProdDisabled}
      />
      <PriceFilterContainer
        type={{ title: "Цена до", value: "to" }}
        onOpen={() => handleOpenModal("to")}
        disabled={isProdDisabled}
      />
      <Link to="/products">
        <div className={css.cancel}>Сброс</div>
      </Link>
    </LayoutToolsLine>
  );
};
export default Tools;
