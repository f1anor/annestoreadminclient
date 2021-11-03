import {
  deleteProducts,
  setModalArchiveProductsDelete,
} from "actions/product-actions";
import ModalDelete from "Common/ModalDelete/ModalDelete";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getModalArchiveProductsDelete } from "selectors/products-selectors";
import { formatNumber, useQuery } from "utils/utils";

const ModalArchiveProductsDeleteContainer = ({ ...props }) => {
  const dispatch = useDispatch();
  const ids = useSelector((state) => getModalArchiveProductsDelete(state));
  const history = useHistory;
  const query = useQuery();

  const handleCloseModal = () => {
    dispatch(setModalArchiveProductsDelete(null));
  };

  const handleDelete = () => {
    dispatch(deleteProducts(ids, query, history));
  };

  return (
    <>
      {!!ids && ids.length > 0 && (
        <ModalDelete
          title="Удалить навсегда"
          handleCloseModal={handleCloseModal}
          handleRemove={handleDelete}
        >
          Внимание! Вы собираетесь навсегда удалить продукт(ы){" "}
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
          Данное действие будет невозможно отменить!
        </ModalDelete>
      )}
    </>
  );
};
export default ModalArchiveProductsDeleteContainer;
