import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchEditProduct } from "actions/product-actions";
import EditProduct from "./EditProduct";

const EditProductContainer = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchEditProduct(id));
  }, [id, dispatch]);

  return <EditProduct id={id} />;
};

export default EditProductContainer;
