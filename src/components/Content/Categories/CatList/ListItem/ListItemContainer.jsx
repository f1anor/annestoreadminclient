import React from "react";

import ListItem from "./ListItem";

const ListItemContainer = ({ category, ...props }) => {
  let color = "#f9f9fa";

  if (category.count > 0) color = "#F1C30F"; // Насыщенный желтый
  if (category.count > 5) color = "#F16600"; // Ярко оранжевый
  if (category.count > 10) color = "#CF3F00"; // Ближе к красному

  return <ListItem color={color} category={category} {...props} />;
};

export default ListItemContainer;
