import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { clearSelectCat, fetchCategories } from "actions/cat-actions";
import {
  getIsBisy,
  getIsCatFetching,
  getActiveCat,
  getPassiveCat,
} from "selectors/cat-selectors";
import Categories from "./Categories";
import { useQuery } from "utils/utils";

const CategoriesContainer = ({
  fetchCategories,
  clearSelectCat,
  setModalEdit,
  ...props
}) => {
  const query = useQuery().toString();
  useEffect(() => {
    fetchCategories(query);
  }, [fetchCategories, query]);

  return <Categories {...props} />;
};

const mapStateToProps = (state) => ({
  isBisy: getIsBisy(state),
  activeCat: getActiveCat(state),
  passiveCat: getPassiveCat(state),
  isFetching: getIsCatFetching(state),
});

export default connect(mapStateToProps, {
  fetchCategories,
  clearSelectCat,
})(CategoriesContainer);
