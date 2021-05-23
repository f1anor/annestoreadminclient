import {
  setModalOrderDelete,
  setModalOrderPreview,
} from "actions/orders-actions";
import React from "react";
import { useDispatch } from "react-redux";
import Menu from "./Menu";

const MenuContainer = ({ id }) => {
  const dispatch = useDispatch();

  // Открыть модальное окно удаления заказа
  const handleSetDeleteModal = () => {
    dispatch(setModalOrderDelete(id));
  };

  // Открыть модальное окно просмотра заказа
  const handleSetPreviewModal = () => {
    dispatch(setModalOrderPreview({ id }));
  };

  // Распечатать заказ на принтере
  const handleSetPrint = () => {
    dispatch(setModalOrderPreview({ id, print: true }));
  };
  return (
    <Menu
      handleSetDeleteModal={handleSetDeleteModal}
      handleSetPreviewModal={handleSetPreviewModal}
      handleSetPrint={handleSetPrint}
      id={id}
    />
  );
};
export default MenuContainer;
