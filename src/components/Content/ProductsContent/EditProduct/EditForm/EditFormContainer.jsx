import React, { useEffect } from "react";
import EditForm from "./EditForm";
import { fetchCategories } from "actions/cat-actions";
import { useDispatch, useSelector } from "react-redux";
import { editProduct } from "actions/product-actions";

import { getIsEditing } from "selectors/orders-selectors";
import { getCatForFrom, getIsCatFetching } from "selectors/cat-selectors";

const EditFormContainer = ({ id }) => {
  const dispatch = useDispatch();

  const catForForm = useSelector((state) => getCatForFrom(state));
  const isCatFetching = useSelector((state) => getIsCatFetching(state));
  const isEditing = useSelector((state) => getIsEditing(state));

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleSubmit = (values) => {
    dispatch(editProduct(values, id));
  };

  return (
    <EditForm
      onSubmit={handleSubmit}
      catForForm={catForForm}
      isCatFetching={isCatFetching}
      isEditing={isEditing}
    />
  );
};

export default EditFormContainer;
