import { addOrderProduct, setModalAddProduct } from "actions/orders-actions";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getModalAddProduct } from "selectors/orders-selectors";
import ModalAddProduct from "./ModalAddProduct";

const ModalAddProductContainer = ({ ...props }) => {
  const data = useSelector((state) => getModalAddProduct(state));

  const dispatch = useDispatch();
  const handleCloseModal = () => {
    dispatch(setModalAddProduct(null));
  };

  const handleAddProduct = (values) => {
    dispatch(addOrderProduct(values.name, data.form, data.value));
  };
  return (
    <>
      {!!data && (
        <ModalAddProduct
          handleCloseModal={handleCloseModal}
          onSubmit={handleAddProduct}
        />
      )}
    </>
  );
};
export default ModalAddProductContainer;
