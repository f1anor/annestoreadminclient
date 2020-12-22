import React from "react";
import { connect } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import Products from "./Products";

const ProductsContainer = (props) => {
  let isEdit = useRouteMatch("/products/edit/:article");
  return <Products isEdit={isEdit} {...props} />;
};

const mapStateToProps = (state) => ({
  isAddingSuccess: state.product.isAddingSuccess,
  isProdFetching: state.product.isFetching,
  isArchiveProdFetching: state.product.isArchiveFetching,
  isCatFetching: state.category.isFetching,
});

export default connect(mapStateToProps, null)(ProductsContainer);
