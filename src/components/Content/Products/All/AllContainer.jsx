import React, { useEffect } from "react";
import { connect } from "react-redux";
import All from "./All";
import { fetchProducts, toggleAddingSuccess } from "actions/product-actions";
import { useQuery } from "../../../../utils/utils";
import { getProductsById, getProdDisabled } from "selectors/products-selectors";

const AllContainer = ({
  fetchProducts,
  totalCount,
  clearSelectedAll,
  deleteProducts,
  isAddingSuccess,
  toggleAddingSuccess,
  pageSize,
  message,
  ...props
}) => {
  useEffect(() => {
    if (!!isAddingSuccess) toggleAddingSuccess();
  }, [isAddingSuccess, toggleAddingSuccess]);

  const query = useQuery();
  query.set("size", pageSize);
  const queryString = query.toString();

  useEffect(() => {
    fetchProducts(queryString);
  }, [fetchProducts, queryString]);

  return (
    <>
      <All
        pageSize={pageSize}
        totalCount={totalCount}
        message={message}
        {...props}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  totalCount: state.product.totalCount,
  pageSize: state.app.tableSize.size,
  isAddingSuccess: state.product.isAddingSuccess,
  message: state.product.message,
  img: state.product.img,
  products: getProductsById(state),
  isProdFetching: state.product.isFetching,
  isProdDisabled: getProdDisabled(state),
});

export default connect(mapStateToProps, {
  fetchProducts,
  toggleAddingSuccess,
})(AllContainer);
