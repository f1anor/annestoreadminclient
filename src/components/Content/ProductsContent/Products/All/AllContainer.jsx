import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import All from "./All";

import { clearSelectedAll, fetchProducts } from "actions/product-actions";
import { useQuery } from "utils/utils";
import {
  getProductsById,
  getProdDisabled,
  getTotalCount,
  getProductImg,
} from "selectors/products-selectors";
import { getPageSize } from "selectors/app-selectors";

const AllContainer = React.memo(() => {
  const products = useSelector((state) => getProductsById(state));
  const pageSize = useSelector((state) => getPageSize(state));
  const totalCount = useSelector((state) => getTotalCount(state));
  const img = useSelector((state) => getProductImg(state));
  const isProdDisabled = useSelector((state) => getProdDisabled(state));

  const dispatch = useDispatch();

  const query = useQuery().toString();

  useEffect(() => {
    dispatch(fetchProducts(query, pageSize));
  }, [query, pageSize, dispatch]);

  //Сбрасываем единожды выделения
  useEffect(() => {
    dispatch(clearSelectedAll());
  }, [dispatch]);

  return (
    <All
      products={products}
      pageSize={pageSize}
      totalCount={totalCount}
      img={img}
      isProdDisabled={isProdDisabled}
    />
  );
});

export default AllContainer;
