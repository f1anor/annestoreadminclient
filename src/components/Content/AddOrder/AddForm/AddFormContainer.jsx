import { addOrder } from "actions/orders-actions";
import React from "react";
import { connect, useDispatch } from "react-redux";
import AddForm from "./AddForm";
// import { preloadImage, addProduct } from "actions/product-actions";

const AddFormContainer = ({ addProduct, fetchCategories, ...props }) => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(addOrder(values));
  };

  return <AddForm onSubmit={handleSubmit} {...props} />;
};

const mapStateToProps = (state) => ({
  catForForm: state.category.cat,
  isCatFetching: state.category.isFetching,
});

export default connect(mapStateToProps, {
  // preloadImage,
  // addProduct,
  // fetchCategories,
  // setTooltip,
})(AddFormContainer);
