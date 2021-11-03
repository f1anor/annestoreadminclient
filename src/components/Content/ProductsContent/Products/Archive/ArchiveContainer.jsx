import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Archive from "./Archive";
import { useQuery } from "utils/utils";
import { fetchArchiveProducts } from "actions/product-actions";
import {
  getArchiveProductsById,
  getArchiveTotalCount,
} from "selectors/products-selectors";
import { getPageSize } from "selectors/app-selectors";

const ArchiveContainer = React.memo(({ ...props }) => {
  const products = useSelector((state) => getArchiveProductsById(state));
  const totalCount = useSelector((state) => getArchiveTotalCount(state));
  const pageSize = useSelector((state) => getPageSize(state));

  const query = useQuery();
  const dispatch = useDispatch();
  const queryString = query.toString();

  useEffect(() => {
    dispatch(fetchArchiveProducts(queryString));
  }, [queryString, dispatch]);

  return (
    <Archive
      products={products}
      pageSize={pageSize}
      totalCount={totalCount}
      {...props}
    />
  );
});

export default ArchiveContainer;
