import withFilters from "hoc/withFilters";
import React from "react";
import PriceFilter from "./PriceFilter";

const PriceFilterContainer = ({
  type: { value, title },
  onOpen,
  filters,
  ...props
}) => {
  const { price } = filters;
  let valueText = null;
  if (!!price && value === "from") {
    valueText = price["$gt"];
  } else if (!!price && value === "to") {
    valueText = price["$lt"];
  }

  return (
    <PriceFilter
      value={valueText}
      title={title}
      handleOpenModal={onOpen}
      {...props}
    />
  );
};
export default withFilters(PriceFilterContainer);
