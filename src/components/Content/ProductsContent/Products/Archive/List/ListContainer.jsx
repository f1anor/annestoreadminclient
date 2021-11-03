import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectArchiveAll, clearSelectedAll } from "actions/product-actions";
import { getSortParams, useQuery } from "utils/utils";
import { getIsArchiveSelectedAll } from "selectors/products-selectors";
import List from "./List";
import { getProdDisabled } from "selectors/products-selectors";
import { getPageSize } from "selectors/app-selectors";

const ListContainer = React.memo(({ ...props }) => {
  const dispatch = useDispatch();
  const query = useQuery();

  const pageSize = useSelector((state) => getPageSize(state));
  const isProdDisabled = useSelector((state) => getProdDisabled(state));
  const isSelectedAll = useSelector((state) => getIsArchiveSelectedAll(state));

  const sort = getSortParams(
    ["date", "article", "title", "views", "price", "stars"],
    query,
    "/products/archive"
  );

  const handleSelectAll = (e) => {
    const { target } = e;

    if (target.checked) {
      dispatch(selectArchiveAll());
    } else {
      dispatch(clearSelectedAll());
    }
  };

  return (
    <List
      sort={sort}
      pageSize={pageSize}
      isProdDisabled={isProdDisabled}
      isSelectedAll={isSelectedAll}
      handleSelectAll={handleSelectAll}
      {...props}
    />
  );
});

export default ListContainer;
