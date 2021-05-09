import React, { useEffect } from "react";
import { connect } from "react-redux";
import AddForm from "./AddForm";
import { preloadImage, addProduct } from "actions/product-actions";
import { fetchCategories } from "actions/cat-actions";
import { setTooltip } from "actions/app-actions";

const AddFormContainer = ({ addProduct, fetchCategories, ...props }) => {
  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return <AddForm onSubmit={addProduct} {...props} />;
};

const mapStateToProps = (state) => ({
  catForForm: state.category.cat,
  isCatFetching: state.category.isFetching,
});

export default connect(mapStateToProps, {
  preloadImage,
  addProduct,
  fetchCategories,
  setTooltip,
})(AddFormContainer);
