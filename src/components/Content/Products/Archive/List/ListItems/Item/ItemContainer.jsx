import React from "react";
import { connect } from "react-redux";
import Item from "./Item";
import { setImg } from "actions/app-actions";
import {
  addSelected,
  clearSelected,
} from "../../../../../../../actions/product-actions";
import { getProdDisabled } from "selectors/products-selectors";

const ItemContainer = ({ addSelected, clearSelected, product, ...props }) => {
  const handleAddSelected = (e) => {
    const { target } = e;

    if (target.checked) {
      addSelected(product._id);
    } else {
      clearSelected(product._id);
    }
  };

  return (
    <Item handleAddSelected={handleAddSelected} product={product} {...props} />
  );
};

const mapStateToProps = (state) => ({
  isProdDisabled: getProdDisabled(state),
  selected: state.product.selected,
});

export default connect(mapStateToProps, { setImg, addSelected, clearSelected })(
  ItemContainer
);
