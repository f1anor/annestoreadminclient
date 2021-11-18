import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalEdit from "./ModalEdit";
import {
  getEditCatFetching,
  getIsCatEditing,
  getModalEdit,
} from "selectors/cat-selectors";
import { setModalEdit, editCat, fetchEditCat } from "actions/cat-actions";

const ModalEditContainer = () => {
  const dispatch = useDispatch();
  const open = useSelector((state) => getModalEdit(state));
  const disabled = useSelector((state) => getEditCatFetching(state));
  const editing = useSelector((state) => getIsCatEditing(state));
  useEffect(() => {
    if (!open) return;
    dispatch(fetchEditCat(open));
  }, [dispatch, open]);

  const handleSubmit = (values) => {
    dispatch(editCat(open, values));
  };

  const handleCloseModal = () => {
    dispatch(setModalEdit(null));
  };

  return (
    <>
      {!!open && (
        <ModalEdit
          onSubmit={handleSubmit}
          handleCloseModal={handleCloseModal}
          disabled={disabled}
          editing={editing}
        />
      )}
    </>
  );
};

export default ModalEditContainer;
