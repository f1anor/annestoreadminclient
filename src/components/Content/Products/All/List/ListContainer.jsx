import React from "react";
import { connect } from "react-redux";
import List from "./List";
import {
  getProdDisabled,
  getIsProductsSelectedAll,
} from "selectors/products-selectors";
import { getSortParams, useQuery } from "../../../../../utils/utils";
import {
  clearSelectedAll,
  selectAll,
} from "../../../../../actions/product-actions";

const ListContainer = ({
  selectAll,
  clearSelectedAll,
  isSelectedAll,
  ...props
}) => {
  const query = useQuery();
  const sort = getSortParams(
    ["time", "article", "title", "category", "views", "price", "active"],
    query,
    "/products/all"
  );

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      selectAll();
    } else {
      clearSelectedAll();
    }
  };

  return (
    <List
      handleSelectAll={handleSelectAll}
      isSelectedAll={isSelectedAll}
      sort={sort}
      {...props}
    />
  );
};

const mapStateToProps = (state) => ({
  isProdDisabled: getProdDisabled(state),
  selected: state.product.selected,
  isSelectedAll: getIsProductsSelectedAll(state),
  // currentProducts: state.product.currentProducts,
});

export default connect(mapStateToProps, { selectAll, clearSelectedAll })(
  ListContainer
);
