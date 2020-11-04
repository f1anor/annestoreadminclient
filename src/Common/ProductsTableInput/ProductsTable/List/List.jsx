import React from "react";
import ListItemContainer from "./ListItem/ListItemContainer";

const List = ({ value, form }) => {
  const products = value.products.sort((a, b) => {
    return b.price - a.price;
  });
  return (
    <tbody>
      {products.map((item) => (
        <ListItemContainer
          key={item.id}
          product={item}
          form={form}
          value={value}
        />
      ))}
    </tbody>
  );
};

export default List;
