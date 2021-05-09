import React, { useEffect } from "react";
import { connect } from "react-redux";
import Products from "./Products";
import {
  toggleAddingSuccess,
  toggleEditingSuccess,
} from "actions/product-actions";

const ProductsContainer = React.memo(
  ({
    isAddingSuccess,
    isEditingSuccess,
    toggleAddingSuccess,
    toggleEditingSuccess,
    ...props
  }) => {
    useEffect(() => {
      if (!!isAddingSuccess) toggleAddingSuccess();
    }, [isAddingSuccess, toggleAddingSuccess]);

    useEffect(() => {
      if (!!isEditingSuccess) toggleEditingSuccess();
    }, [isEditingSuccess, toggleEditingSuccess]);

    return <Products {...props} />;
  }
);

const mapStateToProps = (state) => ({
  isAddingSuccess: state.product.isAddingSuccess,
  isEditingSuccess: state.product.isEditingSuccess,
  isProdFetching: state.product.isFetching,
  isArchiveProdFetching: state.product.isArchiveFetching,
  isCatFetching: state.category.isFetching,
});

export default connect(mapStateToProps, {
  toggleAddingSuccess,
  toggleEditingSuccess,
})(ProductsContainer);
