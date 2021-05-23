import withFilters from "hoc/withFilters";
import React from "react";
import { useDispatch } from "react-redux";
import Tools from "./Tools";
import { setModalPriceFilter } from "actions/orders-actions";

const ToolsContainer = ({ filters, ...props }) => {
  return <Tools />;
};
export default withFilters(ToolsContainer);
