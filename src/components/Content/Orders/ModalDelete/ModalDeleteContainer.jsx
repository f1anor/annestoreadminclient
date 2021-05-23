import { removeOrder, setModalOrderDelete } from "actions/orders-actions";
import ModalDelete from "Common/ModalDelete/ModalDelete";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getModalOrderDelete } from "selectors/orders-selectors";
import { formatNumber } from "utils/utils";

const ModalDeleteContainer = ({ ...props }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => getModalOrderDelete(state));
  const handleCloseModal = () => {
    dispatch(setModalOrderDelete(null));
  };
  const handleRemove = () => {
    dispatch(removeOrder(data));
  };
  return (
    <>
      {!!data && (
        <ModalDelete
          handleRemove={handleRemove}
          handleCloseModal={handleCloseModal}
          title="Удаление заказа"
        >
          Внимание! Вы собираетесь удалить заказ{" "}
          <span
            style={{
              color: "var(--color-red)",
              fontFamily: "var(--font-medium)",
            }}
          >
            #{formatNumber(+data, 5)}
          </span>
          . <br />
          Данное действие является необратимым.
        </ModalDelete>
      )}
    </>
  );
};
export default ModalDeleteContainer;
