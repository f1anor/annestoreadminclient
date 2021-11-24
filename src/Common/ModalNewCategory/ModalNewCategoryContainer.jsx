import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalNewCategory from "./ModalNewCategory";
import { setModalNew, addCat } from "actions/cat-actions";
import { getIsAdding, getModalNew } from "selectors/cat-selectors";

const ModalNewCategoryContainer = ({ ...props }) => {
  const dispatch = useDispatch();
  const open = useSelector((state) => getModalNew(state));
  const adding = useSelector((state) => getIsAdding(state));

  const handleModalClose = () => {
    dispatch(setModalNew(null));
  };

  const handleSubmit = (values) => {
    dispatch(addCat(values));
  };

  return (
    <>
      {!!open && (
        <ModalNewCategory
          handleModalClose={handleModalClose}
          onSubmit={handleSubmit}
          adding={adding}
          {...props}
        />
      )}
    </>
  );
};

export default ModalNewCategoryContainer;
