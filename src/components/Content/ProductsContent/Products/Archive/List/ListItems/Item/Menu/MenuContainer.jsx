import {
  setModalArchiveProductsDelete,
  setModalArchiveProductsRestore,
} from "actions/product-actions";
import React from "react";
import { useDispatch } from "react-redux";
import Menu from "./Menu";

const MenuContainer = ({ id, ...props }) => {
  const dispatch = useDispatch();
  const handleRestore = () => {
    dispatch(setModalArchiveProductsRestore([id]));
  };

  const handleDelete = () => {
    dispatch(setModalArchiveProductsDelete([id]));
  };
  return (
    <Menu
      id={id}
      handleRestore={handleRestore}
      handleDelete={handleDelete}
      {...props}
    />
  );
};
export default MenuContainer;
