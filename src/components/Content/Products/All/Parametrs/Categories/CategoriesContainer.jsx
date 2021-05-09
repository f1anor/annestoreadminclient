import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import withFilters from "hoc/withFilters";
import Categories from "./Categories";
import { fetchCategories } from "actions/cat-actions";
import { getCat, getIsFetching } from "selectors/cat-selectors";

const CategoriesContainer = React.memo(({ query, filters, ...props }) => {
  const cat = useSelector((state) => getCat(state));
  const isFetchingCat = useSelector((state) => getIsFetching(state));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const currentCat = filters.category;

  const clearFilters = { ...filters };
  delete clearFilters.category;
  query.set("filter", JSON.stringify(clearFilters));
  const clearCat = `/products/all?${query.toString()}`;

  const catArr = cat.map((category) => {
    const f = { ...filters };
    const item = { ...category };
    f.category = item.title.toString();
    query.set("filter", JSON.stringify(f));
    item.link = `/products/all?${query.toString()}`;
    return item;
  });

  return (
    <Categories
      isFetchingCat={isFetchingCat}
      cat={catArr}
      currentCat={currentCat}
      clearCat={clearCat}
      {...props}
    />
  );
});

export default withFilters(CategoriesContainer);
