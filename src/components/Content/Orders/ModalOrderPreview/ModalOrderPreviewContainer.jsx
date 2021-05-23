import { fetchOrder, setModalOrderPreview } from "actions/orders-actions";
import React, { useEffect, useRef } from "react";
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
  }, [id]);

  useEffect(() => {
    if (!!order && !!print) {
      console.log("Заказ:", order);
      printComponent(pritable.current, styles);
      handleCloseModal();
    }
  }, [order, print]);

  const handleCloseModal = () => {
    dispatch(setModalOrderPreview({}));
  };
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
