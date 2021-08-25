import React from "react";
import { convertToTimeAgo } from "utils/utils";
import Item from "./Item";

const ItemContainer = ({ order, order: { creationDate, price } }) => {
  const timeAgo = convertToTimeAgo(+creationDate, price);
  return <Item order={order} timeAgo={timeAgo} />;
};
export default ItemContainer;
