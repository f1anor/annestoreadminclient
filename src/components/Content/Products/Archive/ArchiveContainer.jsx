import React, { useEffect } from "react";
import { connect } from "react-redux";
import Archive from "./Archive";
import { useQuery } from "../../../../utils/utils";
import { fetchArchiveProducts } from "../../../../actions/product-actions";
import { getArchiveProductsById } from "../../../../selectors/products-selectors";
import { useHistory } from "react-router-dom";

const ArchiveContainer = React.memo(
  ({ pageSize, fetchArchiveProducts, ...props }) => {
    const history = useHistory();
    const query = useQuery();
    const size = query.get("size");
    query.set("size", pageSize);
    const queryString = query.toString();

    useEffect(() => {
      if (size !== pageSize) {
        history.push(history.location.pathname + "?" + queryString);
      }
    }, [history, queryString, pageSize, size]);

    useEffect(() => {
      fetchArchiveProducts(queryString);
    }, [queryString, fetchArchiveProducts]);

    return <Archive pageSize={pageSize} {...props} />;
  }
);

const mapStateToProps = (state) => ({
  products: getArchiveProductsById(state),
  pageSize: state.app.tableSize.size,
  totalCount: state.product.archiveTotalCount,
});

export default connect(mapStateToProps, { fetchArchiveProducts })(
  ArchiveContainer
);
