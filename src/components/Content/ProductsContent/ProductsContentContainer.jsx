import React from "react";
import { useSelector } from "react-redux";
import {
  getIsProductAddingSuccess,
  getIsProductEditingSuccess,
  getProductsToOrder,
} from "selectors/products-selectors";
import ProductsContent from "./ProductsContent";

const ProductsContentContainer = ({ ...props }) => {
  const isProductAddingSuccess = useSelector((state) =>
    getIsProductAddingSuccess(state)
  );
  const isProductEditingSuccess = useSelector((state) =>
    getIsProductEditingSuccess(state)
  );

  const productsToOrder = useSelector((state) => getProductsToOrder(state));

  return (
    <ProductsContent
      isProductAddingSuccess={isProductAddingSuccess}
      isProductEditingSuccess={isProductEditingSuccess}
      productsToOrder={productsToOrder}
    />
  );
};
export default ProductsContentContainer;
