import {
  restoreFromArchive,
  setModalArchiveProductsRestore,
} from "actions/product-actions";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getModalArchiveProductsRestore } from "selectors/products-selectors";
import { useQuery } from "utils/utils";
import ModalArchiveProductsRestore from "./ModalArchiveProductsRestore";

const ModalArchiveProductsRestoreContainer = ({ ...props }) => {
  const dispatch = useDispatch();
  const ids = useSelector((state) => getModalArchiveProductsRestore(state));
  const query = useQuery();
  const history = useHistory();

  const handleCloseModal = () => {
    dispatch(setModalArchiveProductsRestore(null));
  };

  const handeRestore = () => {
    dispatch(restoreFromArchive(ids, query, history));
  };

  return (
    !!ids &&
    ids.length > 0 && (
      <ModalArchiveProductsRestore
        ids={ids}
        handleCloseModal={handleCloseModal}
        handeRestore={handeRestore}
      />
    )
  );
};
export default ModalArchiveProductsRestoreContainer;
