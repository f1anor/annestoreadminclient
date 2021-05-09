import React from "react";
import EmptySlots from "../../../../../../Common/EmptySlots/EmptySlots";
import ItemContainer from "./Item/ItemContainer";

const ListItems = React.memo(({ products, pageSize }) => {
  return (
    <tbody>
      {products.map((product) => (
        <ItemContainer key={product._id} product={product} />
      ))}
      <EmptySlots rows={pageSize - products.length} cells={6} />
    </tbody>
  );
});

export default ListItems;
