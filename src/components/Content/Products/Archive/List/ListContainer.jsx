import React from "react";
import { connect } from "react-redux";
import {
  fetchArchiveProducts,
  selectArchiveAll,
  clearSelectedAll,
} from "actions/product-actions";
import { getSortParams, useQuery } from "utils/utils";
import { getIsArchiveSelectedAll } from "selectors/products-selectors";
import List from "./List";
import { getProdDisabled } from "selectors/products-selectors";

const ListContainer = React.memo(
  ({ fetchArchiveProducts, selectArchiveAll, clearSelectedAll, ...props }) => {
    const query = useQuery();
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
  }
);

const mapStateToProps = (state) => ({
  pageSize: state.app.tableSize.size,
  isProdDisabled: getProdDisabled(state),
  isSelectedAll: getIsArchiveSelectedAll(state),
});

export default connect(mapStateToProps, {
  fetchArchiveProducts,
  selectArchiveAll,
  clearSelectedAll,
})(ListContainer);
