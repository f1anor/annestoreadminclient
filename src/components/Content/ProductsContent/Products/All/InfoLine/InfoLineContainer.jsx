import {
  setModalAllProductsToArchive,
  makeCustomOrder,
} from "actions/product-actions";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSelected } from "selectors/products-selectors";
import InfoLine from "./InfoLine";

const InfoLineContainer = ({ ...props }) => {
  const selected = useSelector((state) => getSelected(state));

  const dispatch = useDispatch();

  const handleMoveToArchive = () => {
    dispatch(setModalAllProductsToArchive(selected));
  };

  const handleMakeOrder = () => {
    dispatch(makeCustomOrder(selected));
  };

  return (
    <InfoLine
      selected={selected}
      handleMoveToArchive={handleMoveToArchive}
      handleMakeOrder={handleMakeOrder}
      {...props}
    />
  );
};
export default InfoLineContainer;
