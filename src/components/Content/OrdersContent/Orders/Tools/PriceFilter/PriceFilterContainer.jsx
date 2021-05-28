import { setModalPriceFilter } from "actions/orders-actions";
import withFilters from "hoc/withFilters";
import React from "react";
import { useDispatch } from "react-redux";
import PriceFilter from "./PriceFilter";

const PriceFilterContainer = ({
  type: { value, title },
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

  const dispatch = useDispatch();
  const handleOpenModal = () => {
    dispatch(setModalPriceFilter(value));
  };

  return (
    <PriceFilter
      value={valueText}
      title={title}
      handleOpenModal={handleOpenModal}
      {...props}
    />
  );
};
export default withFilters(PriceFilterContainer);
