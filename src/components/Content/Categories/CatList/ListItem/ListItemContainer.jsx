import React from "react";
import { connect } from "react-redux";
import {
  removeCat,
  moveUpCat,
  moveDownCat,
  setModalEdit,
  setModalDelete,
} from "actions/cat-actions";
import ListItem from "./ListItem";

const ListItemContainer = ({
  category,
  removeCat,
  moveUpCat,
  moveDownCat,
  setModalEdit,
  setModalDelete,
  ...props
}) => {
  let color = "#e9e9ee";
  if (category.count > 0) color = "#005dff";
  if (category.count > 5) color = "#c86aff";
  if (category.count > 10) color = "#f9d632";
  if (category.count > 15) color = "#ea6566";

  const handleMoveUp = () => {
    moveUpCat(category.number);
  };

  const handleMoveDown = () => {
    moveDownCat(category.number);
  };

  const handleOpenEditModal = () => {
    setModalEdit(category._id);
  };

  const handleOpenDeleteModal = () => {
    setModalDelete({ num: category.number, name: category.title });
  };

  return (
    <ListItem
      color={color}
      category={category}
      handleMoveUp={handleMoveUp}
      handleMoveDown={handleMoveDown}
      handleOpenEditModal={handleOpenEditModal}
      handleOpenDeleteModal={handleOpenDeleteModal}
      {...props}
    />
  );
};

export default connect(null, {
  removeCat,
  moveUpCat,
  moveDownCat,
  setModalEdit,
  setModalDelete,
})(ListItemContainer);
