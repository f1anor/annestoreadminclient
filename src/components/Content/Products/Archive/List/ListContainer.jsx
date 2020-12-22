import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  fetchArchiveProducts,
  selectArchiveAll,
  clearSelectedAll,
} from "../../../../../actions/product-actions";
import { getSortParams, useQuery } from "../../../../../utils/utils";
import {
  getArchiveProductsById,
  getIsArchiveSelectedAll,
} from "selectors/products-selectors";
import List from "./List";
import { getProdDisabled } from "selectors/products-selectors";

const ListContainer = ({
  fetchArchiveProducts,
  selectArchiveAll,
  clearSelectedAll,
  ...props
}) => {
  const query = useQuery();
  const queryString = useQuery().toString();
  useEffect(() => {
    fetchArchiveProducts(queryString);
  }, [queryString, fetchArchiveProducts]);

  const sort = getSortParams(
    ["time", "article", "title", "views", "price"],
    query,
    "/products/archive"
  );

  const handleSelectAll = (e) => {
    const { target } = e;

    if (target.checked) {
      selectArchiveAll();
    } else {
      clearSelectedAll();
    }
  };

  return <List sort={sort} handleSelectAll={handleSelectAll} {...props} />;
};

const mapStateToProps = (state) => ({
  products: getArchiveProductsById(state),
  isProdDisabled: getProdDisabled(state),
  isSelectedAll: getIsArchiveSelectedAll(state),
});

export default connect(mapStateToProps, {
  fetchArchiveProducts,
  selectArchiveAll,
  clearSelectedAll,
})(ListContainer);
