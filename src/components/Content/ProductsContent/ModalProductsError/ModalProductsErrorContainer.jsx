import { setModalProductsError } from "actions/product-actions";
import ModalError from "Common/ModalError/ModalError";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMessage } from "selectors/products-selectors";

const ModalProductsErrorContainer = ({ ...props }) => {
  const data = useSelector((state) => getMessage(state));
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(setModalProductsError());
  };
  return (
    <>
      {!!data && (
        <ModalError handleCloseModal={handleCloseModal}>{data}</ModalError>
      )}
    </>
  );
};
export default ModalProductsErrorContainer;
