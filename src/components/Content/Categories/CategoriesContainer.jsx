import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { clearSelectCat, fetchCategories } from "../../../actions/cat-actions";
import { getIsFetching } from "../../../selectors/cat-selectors";
import Categories from "./Categories";

const CategoriesContainer = ({ fetchCategories, clearSelectCat, ...props }) => {
  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const handleClearSelectCat = (e) => {
    const { target } = e;
    const closestTarget = target.closest(".list-group-item");
    if (closestTarget) return;
    clearSelectCat();
  };

  return <Categories {...props} handleClearSelectCat={handleClearSelectCat} />;
};

const mapStateToProps = (state) => ({
  cat: state.category.cat,
  isFetching: getIsFetching(state),
});

export default connect(mapStateToProps, { fetchCategories, clearSelectCat })(
  CategoriesContainer
);
