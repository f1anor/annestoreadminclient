import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchEditProduct } from "../../../../actions/product-actions";
import Edit from "./Edit";

const EditContainer = ({ fetchEditProduct }) => {
  const { article } = useParams();

  useEffect(() => {
    fetchEditProduct(article);
  }, [article, fetchEditProduct]);

  return <Edit />;
};

export default connect(null, { fetchEditProduct })(EditContainer);
