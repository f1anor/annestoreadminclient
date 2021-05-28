import { setModalOrderError } from "actions/orders-actions";
import ModalError from "Common/ModalError/ModalError";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getModalOrderError } from "selectors/orders-selectors";

const ModalOrderErrorContainer = () => {
  const data = useSelector((state) => getModalOrderError(state));
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(setModalOrderError());
  };
  return (
    <>
      {!!data && (
        <ModalError handleCloseModal={handleCloseModal}>{data}</ModalError>
      )}
    </>
  );
};
export default ModalOrderErrorContainer;
