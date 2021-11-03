import React from "react";
import EmptySlots from "Common/EmptySlots/EmptySlots";
import ItemContainer from "./Item/ItemContainer";

const ListItems = ({ products, pageSize = 0 }) => {
  return (
    <tbody>
      {products.map((product) => (
        <ItemContainer product={product} key={product._id} />
      ))}
      <EmptySlots rows={pageSize - products.length} cells={11} />
    </tbody>
  );
};

export default ListItems;
