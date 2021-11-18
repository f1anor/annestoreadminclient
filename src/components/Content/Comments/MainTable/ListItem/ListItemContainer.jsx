import React from "react";
import ListItem from "./ListItem";
import { getAnsId } from "selectors/comments-selectors";
import { useSelector } from "react-redux";

const ListItemContainer = ({ ...props }) => {
  const ansId = useSelector((state) => getAnsId(state));
  return <ListItem ansId={ansId} {...props} />;
};

export default ListItemContainer;
