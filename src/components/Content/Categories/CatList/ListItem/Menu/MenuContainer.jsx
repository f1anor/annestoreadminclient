import React from "react";
import Menu from "./Menu";

import {
  moveUpCat,
  moveDownCat,
  setModalEdit,
  setModalDelete,
} from "actions/cat-actions";
import { useDispatch } from "react-redux";

const MenuContainer = ({ category, ...props }) => {
  const dispatch = useDispatch();
  const handleMoveUp = () => {
    dispatch(moveUpCat(category.number));
  };

  const handleMoveDown = () => {
    dispatch(moveDownCat(category.number));
  };

  const handleOpenEditModal = () => {
    dispatch(setModalEdit(category._id));
  };

  const handleOpenDeleteModal = () => {
    dispatch(setModalDelete({ num: category.number, name: category.title }));
  };
  return (
    <Menu
      handleMoveUp={handleMoveUp}
      handleMoveDown={handleMoveDown}
      handleOpenEditModal={handleOpenEditModal}
      handleOpenDeleteModal={handleOpenDeleteModal}
      {...props}
    />
  );
};
export default MenuContainer;
