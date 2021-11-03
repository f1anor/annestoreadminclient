import withFilters from "hoc/withFilters";
import { setModalPriceFilter } from "actions/orders-actions";
import React from "react";
import Tools from "./Tools";
import { useDispatch } from "react-redux";

// TODO: Проверить на сколько надо использовать hoc withFilters
const ToolsContainer = ({ filters, ...props }) => {
  const dispatch = useDispatch();
  const handleOpenModal = (value) => {
    dispatch(setModalPriceFilter(value));
  };
  return <Tools handleOpenModal={handleOpenModal} {...props} />;
};
export default withFilters(ToolsContainer);
