import React from "react";
import { useSelector } from "react-redux";
import { getIsCatFetching } from "selectors/cat-selectors";
import {
  getIsArchiveFetching,
  getIsFetching,
} from "selectors/products-selectors";
import Products from "./Products";

const ProductsContainer = React.memo(() => {
  const isProductsFetching = useSelector((state) => getIsFetching(state));

  const isArchiveProductsFetching = useSelector((state) =>
    getIsArchiveFetching(state)
  );
  const isCatFetching = useSelector((state) => getIsCatFetching(state));

  return (
    <Products
      isProductsFetching={isProductsFetching}
      isArchiveProductsFetching={isArchiveProductsFetching}
      isCatFetching={isCatFetching}
    />
  );
});

export default ProductsContainer;
