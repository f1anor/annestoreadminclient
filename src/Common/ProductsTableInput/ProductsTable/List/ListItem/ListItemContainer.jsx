import React from "react";
import { connect } from "react-redux";
import { change } from "redux-form";
import { setImg } from "../../../../../actions/orders-actions";
import ListItem from "./ListItem";

const ListItemContainer = ({ change, form, value, product, ...props }) => {
  const handleSetAmount = (val) => {
    if (isNaN(parseInt(+val))) return;
    const newProd = { ...product };
    newProd.amount = +val;

    change(form, "products", {
      ...value,
      products: [
        ...value.products.filter((item) => item.id !== product.id),
        newProd,
      ],
    });
  };
  const handleRemove = () => {
    change(form, "products", {
      ...value,
      products: [...value.products.filter((item) => item.id !== product.id)],
    });
  };
  return (
    <ListItem
      product={product}
      handleSetAmount={handleSetAmount}
      handleRemove={handleRemove}
      {...props}
    />
  );
};

export default connect(null, { change, setImg })(ListItemContainer);
