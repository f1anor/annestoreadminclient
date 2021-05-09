import React, { useEffect } from "react";
import EditForm from "./EditForm";
import { fetchCategories } from "actions/cat-actions";
import { connect } from "react-redux";
import { preloadImage, editProduct } from "actions/product-actions";
import { setTooltip } from "actions/app-actions";

const EditFormContainer = ({ fetchCategories, editProduct, id, ...props }) => {
  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const handleSubmit = (values) => {
    editProduct(values, id);
  };

  return <EditForm onSubmit={handleSubmit} {...props} />;
};

const mapStateToProps = (state) => ({
  catForForm: state.category.cat,
  isCatFetching: state.category.isFetching,
  isEditing: state.product.isEditing,
});

export default connect(mapStateToProps, {
  preloadImage,
  editProduct,
  fetchCategories,
  setTooltip,
})(EditFormContainer);
