import {
  setModalAllProductsToArchive,
  makeCustomOrder,
} from "actions/product-actions";
import React from "react";
import { useDispatch } from "react-redux";
import Menu from "./Menu";

const MenuContainer = ({ id, ...props }) => {
  const dispatch = useDispatch();
  const handleMoveToArchive = () => {
    dispatch(setModalAllProductsToArchive([id]));
  };

  const handleMakeOrder = () => {
    dispatch(makeCustomOrder([id]));
  };

  return (
    <Menu
      id={id}
      handleMoveToArchive={handleMoveToArchive}
      handleMakeOrder={handleMakeOrder}
      {...props}
    />
  );
};
export default MenuContainer;
