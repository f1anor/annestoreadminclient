import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchEditProduct } from "actions/product-actions";
import EditProduct from "./EditProduct";

const EditProductContainer = ({ fetchEditProduct }) => {
  const { id } = useParams();
  useEffect(() => {
    fetchEditProduct(id);
  }, [id, fetchEditProduct]);

  return <EditProduct id={id} />;
};

export default connect(null, { fetchEditProduct })(EditProductContainer);
