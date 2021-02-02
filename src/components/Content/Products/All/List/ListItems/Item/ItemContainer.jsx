import React from "react";
import Item from "./Item";
import { addSelected, clearSelected } from "actions/product-actions";
import { setImg } from "actions/app-actions";
import { connect } from "react-redux";
import { getProdDisabled } from "selectors/products-selectors";
import { toggleStatus } from "../../../../../../../actions/product-actions";
import { useQuery } from "utils/utils";

const ItemContainer = ({
  selected,
  clearSelected,
  addSelected,
  product,
  toggleStatus,
  ...props
}) => {
  const query = useQuery().toString();

  const handleAddSelected = (e) => {
    const { target } = e;

    if (target.checked) {
      addSelected(product._id);
    } else {
      clearSelected(product._id);
    }
  };

  const handleToggleStatus = () => {
    toggleStatus(product._id, !product.active, query);
  };

  return (
    <Item
      selected={selected}
      handleAddSelected={handleAddSelected}
      handleToggleStatus={handleToggleStatus}
      product={product}
      {...props}
    />
  );
};

const mapStateToProps = (state) => ({
  selected: state.product.selected,
  prodDisabled: getProdDisabled(state),
});

export default connect(mapStateToProps, {
  addSelected,
  clearSelected,
  setImg,
  toggleStatus,
})(ItemContainer);
