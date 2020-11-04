import React from "react";
import ProductContainer from "./Product/ProductContainer";

const List = ({ products, ...props }) => {
  return (
    <tbody>
      {products.map((product) => (
        <ProductContainer product={product} key={product._id} {...props} />
      ))}
    </tbody>
  );
};

export default List;
