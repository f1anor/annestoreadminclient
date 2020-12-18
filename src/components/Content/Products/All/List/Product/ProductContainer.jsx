import React from "react";
import { connect } from "react-redux";
import Product from "./Product";
import { addSelected, clearSelected } from "actions/product-actions";
import { setImg } from "actions/app-actions";
import { getProdDisabled } from "selectors/products-selectors";

const ProductContainer = ({
  selected,
  addSelected,
  clearSelected,
  ...props
}) => {
  const handleAddSelected = (e, id) => {
    const { target } = e;

    if (target.checked) {
      addSelected(id);
    } else {
      clearSelected(id);
    }
  };

  return (
    <Product
      selected={selected}
      handleAddSelected={handleAddSelected}
      {...props}
    />
  );
};

const mapStateToProps = (state) => ({
  selected: state.product.selected,
  getProdDisabled: getProdDisabled(state),
});

export default connect(mapStateToProps, {
  addSelected,
  clearSelected,
  setImg,
})(ProductContainer);
