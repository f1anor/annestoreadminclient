import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Item from "./Item";
import { setImg } from "actions/app-actions";
import { addSelected, clearSelected } from "actions/product-actions";
import { getProdDisabled, getSelected } from "selectors/products-selectors";
import { tableDate } from "utils/utils";

const ItemContainer = ({ product, ...props }) => {
  const dispatch = useDispatch();
  const isProdDisabled = useSelector((state) => getProdDisabled(state));
  const selected = useSelector((state) => getSelected(state));

  const handleAddSelected = (e) => {
    const { target } = e;

    if (target.checked) {
      dispatch(addSelected(product._id));
    } else {
      dispatch(clearSelected(product._id));
    }
  };
  const time = tableDate(product.date);

  const handleSetImg = () => {
    dispatch(setImg(product.imgs, product._id));
  };

  return (
    <Item
      handleAddSelected={handleAddSelected}
      time={time}
      product={product}
      isProdDisabled={isProdDisabled}
      selected={selected}
      handleSetImg={handleSetImg}
      {...props}
    />
  );
};

export default ItemContainer;
