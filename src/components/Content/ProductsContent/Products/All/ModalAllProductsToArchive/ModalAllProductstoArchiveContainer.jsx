import {
  moveToArchive,
  setModalAllProductsToArchive,
} from "actions/product-actions";
import ModalDelete from "Common/ModalDelete/ModalDelete";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getModalAllProductsToArchive } from "selectors/products-selectors";
import { formatNumber, useQuery } from "utils/utils";

const ModalAllProductstoArchiveContainer = ({ ...props }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const query = useQuery();

  const ids = useSelector((state) => getModalAllProductsToArchive(state));

  const handleMoveToArchive = () => {
    dispatch(moveToArchive(ids, query, history));
  };

  const handleClose = () => {
    dispatch(setModalAllProductsToArchive(null));
  };

  return (
    <>
      {!!ids && ids.length > 0 && (
        <ModalDelete
          handleRemove={handleMoveToArchive}
          handleCloseModal={handleClose}
          title="Переместить в Архив"
        >
          Внимание! Вы собираетесь перенести в архив продукт(ы){" "}
          <span
            style={{
              color: "var(--color-red)",
              fontFamily: "var(--font-medium)",
            }}
          >
            {ids.map((data, index) => (
              <span key={data}>
                #{formatNumber(+data, 5)}
                {index !== ids.length - 1 && ", "}
              </span>
            ))}
          </span>
          . <br />
          Данные продукты перестанут отображаться в магазине.
        </ModalDelete>
      )}
    </>
  );
};
export default ModalAllProductstoArchiveContainer;
