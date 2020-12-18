import React from "react";
import EmptySlots from "../../../../../Common/EmptySlots/EmptySlots";
import ProductContainer from "./Product/ProductContainer";

const List = ({ products, ...props }) => {
  return (
    <tbody>
      {products.map((product) => (
        <ProductContainer product={product} key={product._id} {...props} />
      ))}
      <EmptySlots rows={10 - products.length} cells={7} />
    </tbody>
  );
};

export default List;
