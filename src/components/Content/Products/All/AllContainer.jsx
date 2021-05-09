import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import All from "./All";

import { fetchProducts } from "actions/product-actions";
import { useQuery } from "utils/utils";
import {
  getProductsById,
  getProdDisabled,
  getTotalCount,
  getMessage,
  getProductImg,
  getIsFetching,
  getIsProductAddingSuccess,
} from "selectors/products-selectors";
import { getPageSize } from "selectors/app-selectors";

const AllContainer = React.memo(() => {
  const products = useSelector((state) => getProductsById(state));
  const pageSize = useSelector((state) => getPageSize(state));
  const totalCount = useSelector((state) => getTotalCount(state));
  const message = useSelector((state) => getMessage(state));
  const img = useSelector((state) => getProductImg(state));
  const isProdDisabled = useSelector((state) => getProdDisabled(state));
  const isProdFetching = useSelector((state) => getIsFetching(state));

  const dispatch = useDispatch();

  const query = useQuery().toString();

  useEffect(() => {
    dispatch(fetchProducts(query, pageSize));
  }, [query, pageSize, dispatch]);

  return (
    <All
      products={products}
      pageSize={pageSize}
      totalCount={totalCount}
      message={message}
      img={img}
      isProdDisabled={isProdDisabled}
      isProdFetching={isProdFetching}
    />
  );
});

export default AllContainer;
