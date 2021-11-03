import React from "react";
import { useDispatch, useSelector } from "react-redux";
import List from "./List";
import {
  getProdDisabled,
  getIsProductsSelectedAll,
  getSelected,
} from "selectors/products-selectors";
import { getSortParams, useQuery } from "utils/utils";
import { clearSelectedAll, selectAll } from "actions/product-actions";

const ListContainer = ({ ...props }) => {
  const dispatch = useDispatch();
  const isProdDisabled = useSelector((state) => getProdDisabled(state));
  const selected = useSelector((state) => getSelected(state));
  const isSelectedAll = useSelector((state) => getIsProductsSelectedAll(state));

  const query = useQuery();
  const sort = getSortParams(
    ["date", "_id", "title", "category", "price", "active", "amount", "stars"],
    query,
    "/products/all"
  );

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      dispatch(selectAll());
    } else {
      dispatch(clearSelectedAll());
    }
  };

  return (
    <List
      isProdDisabled={isProdDisabled}
      handleSelectAll={handleSelectAll}
      selected={selected}
      isSelectedAll={isSelectedAll}
      sort={sort}
      {...props}
    />
  );
};

export default ListContainer;
