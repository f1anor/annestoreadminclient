import { setImg } from "actions/app-actions";
import React from "react";
import { useDispatch } from "react-redux";
import { convertToTimeAgo } from "utils/utils";
import Item from "./Item";

const ItemContainer = ({ order, order: { creationDate, price } }) => {
  const dispatch = useDispatch();
  const handleSetImg = (arr) => {
    dispatch(setImg(arr));
  };
  const timeAgo = convertToTimeAgo(+creationDate, price);
  return <Item order={order} timeAgo={timeAgo} handleSetImg={handleSetImg} />;
};
export default ItemContainer;
