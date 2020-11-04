import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import withFilters from "../../../../../../hoc/withFilters";
import Categories from "./Categories";
import { fetchCategories } from "actions/cat-actions";

const CategoriesContainer = ({
  query,
  filters,
  cat,
  isFetchingCat,
  fetchCategories,
  ...props
}) => {
  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const currentCat = filters.category;

  const clearFilters = { ...filters };
  delete clearFilters.category;
  query.set("filter", JSON.stringify(clearFilters));
  const clearCat = `/products/all?${query.toString()}`;

  const catArr = cat.map((item) => {
    const f = { ...filters };
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
};

const mapStateToProps = (state) => ({
  cat: state.category.cat,
  isFetchingCat: state.category.isFetching,
});

export default compose(
  connect(mapStateToProps, { fetchCategories }),
  withFilters
)(CategoriesContainer);
