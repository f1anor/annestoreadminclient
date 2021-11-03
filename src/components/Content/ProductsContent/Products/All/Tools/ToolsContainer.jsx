import { setModalProductPriceFilter } from "actions/product-actions";
import React from "react";
import { useDispatch } from "react-redux";
import Tools from "./Tools";

const ToolsContainer = ({ ...props }) => {
  const dispatch = useDispatch();
  const handleOpenModal = (value) => {
    dispatch(setModalProductPriceFilter(value));
  };
  return <Tools handleOpenModal={handleOpenModal} />;
};
export default ToolsContainer;
