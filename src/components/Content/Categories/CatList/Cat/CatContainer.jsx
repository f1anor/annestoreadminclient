import React from "react";
import { connect } from "react-redux";
import { selectCat } from "../../../../../actions/cat-actions";
import Cat from "./Cat";

const CatContainer = (props) => {
  return <Cat {...props} />;
};

const mapStateToProps = (state) => ({
  selected: state.category.selected,
});

const mapDispatchToProps = {
  selectCat,
};

export default connect(mapStateToProps, mapDispatchToProps)(CatContainer);
