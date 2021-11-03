import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddForm from "./AddForm";
import { addProduct } from "actions/product-actions";
import { fetchCategories } from "actions/cat-actions";
import { getCatForFrom, getIsCatFetching } from "selectors/cat-selectors";

const AddFormContainer = () => {
  const dispatch = useDispatch();

  const catForForm = useSelector((state) => getCatForFrom(state));
  const isCatFetching = useSelector((state) => getIsCatFetching(state));

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleAddProduct = (values) => {
    dispatch(addProduct(values));
  };

  return (
    <AddForm
      onSubmit={handleAddProduct}
      catForForm={catForForm}
      isCatFetching={isCatFetching}
    />
  );
};

export default AddFormContainer;
