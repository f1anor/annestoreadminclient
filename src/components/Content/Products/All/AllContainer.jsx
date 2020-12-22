import React, { useEffect } from "react";
import { connect } from "react-redux";
import All from "./All";
import { fetchProducts, toggleAddingSuccess } from "actions/product-actions";
import { getProductsById, getProdDisabled } from "selectors/products-selectors";
import { getSortParams, useQuery } from "../../../../utils/utils";

const AllContainer = ({
  fetchProducts,
  products,
  totalCount,
  clearSelectedAll,
  deleteProducts,
  isAddingSuccess,
  toggleAddingSuccess,
  selected,
  isProdDisabled,
  message,
  ...props
}) => {
  useEffect(() => {
    if (!!isAddingSuccess) toggleAddingSuccess();
  }, [isAddingSuccess, toggleAddingSuccess]);

  const query = useQuery();
  const queryString = query.toString();

  const pagesize = 10;

  useEffect(() => {
    fetchProducts(queryString);
  }, [fetchProducts, queryString]);
  const sort = getSortParams(
    ["time", "article", "title", "category", "views", "price"],
    query,
    "/products/all"
  );

  return (
    <>
      <All
        products={products}
        pagesize={pagesize}
        totalCount={totalCount}
        sort={sort}
        isProdDisabled={isProdDisabled}
        message={message}
        {...props}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  products: getProductsById(state),
  totalCount: state.product.totalCount,
  currentProducts: state.product.currentProducts,
  selected: state.product.selected,
  isAddingSuccess: state.product.isAddingSuccess,
  isProdDisabled: getProdDisabled(state),
  message: state.product.message,
  img: state.product.img,
});

export default connect(mapStateToProps, {
  fetchProducts,
  toggleAddingSuccess,
})(AllContainer);
