import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setModalArchiveProductsDelete,
  setModalArchiveProductsRestore,
} from "actions/product-actions";
import InfoLine from "./InfoLine";
import {
  getArchiveTotalCount,
  getProdDisabled,
  getSelected,
} from "selectors/products-selectors";

const InfoLineContainer = ({ ...props }) => {
  const dispatch = useDispatch();
  const totalCount = useSelector((state) => getArchiveTotalCount(state));
  const isProdDisabled = useSelector((state) => getProdDisabled(state));
  const selected = useSelector((state) => getSelected(state));
  const handleDelete = () => {
    dispatch(setModalArchiveProductsDelete(selected));
  };
  const handleRestore = () => {
    dispatch(setModalArchiveProductsRestore(selected));
  };

  return (
    <InfoLine
      totalCount={totalCount}
      isProdDisabled={isProdDisabled}
      selected={selected}
      handleDelete={handleDelete}
      handleRestore={handleRestore}
      {...props}
    />
  );
};

export default InfoLineContainer;
