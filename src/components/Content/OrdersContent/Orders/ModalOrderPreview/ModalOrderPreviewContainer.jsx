import { fetchOrder, setModalOrderPreview } from "actions/orders-actions";
import React, { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getModalOrderPreview, getOrder } from "selectors/orders-selectors";
import ModalOrderPreview from "./ModalOrderPreview";
import { printComponent } from "utils/utils";
import { styles } from "./printStyles";

const ModalOrderPreviewContainer = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => getModalOrderPreview(state));
  const order = useSelector((state) => getOrder(state));
  const pritable = useRef();

  const { id, print } = data;

  const handlePrint = () => {
    printComponent(pritable.current, styles);
  };

  useEffect(() => {
    if (!!id) dispatch(fetchOrder(id));
  }, [id, dispatch]);

  const handleCloseModal = useCallback(() => {
    dispatch(setModalOrderPreview({}));
  }, [dispatch]);

  useEffect(() => {
    if (!!order && !!print) {
      printComponent(pritable.current, styles);
      handleCloseModal();
    }
  }, [order, print, handleCloseModal]);

  return (
    <>
      {!!id && !!order && (
        <ModalOrderPreview
          handleCloseModal={handleCloseModal}
          order={order}
          handlePrint={handlePrint}
          ref={pritable}
        />
      )}
    </>
  );
};
export default ModalOrderPreviewContainer;
