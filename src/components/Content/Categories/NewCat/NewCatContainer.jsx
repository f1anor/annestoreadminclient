import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { addCat } from "../../../../actions/cat-actions";
import { getCatDisabled } from "../../../../selectors/cat-selectors";
import NewCat from "./NewCat";

const NewCatContainer = ({ addCat, isAdding, isCatDisabled }) => {
  const [value, changeValue] = useState("");
  const handleChange = (e) => {
    const { value } = e.target;
    changeValue(value);
  };
  const handleAddCat = () => {
    if (!value) return;
    addCat(value);
    changeValue("");
  };

  return (
    <NewCat
      isAdding={isAdding}
      isCatDisabled={isCatDisabled}
      value={value}
      handleChange={handleChange}
      handleAddCat={handleAddCat}
    />
  );
};

const mapStateToProps = (state) => ({
  isAdding: state.category.isAdding,
  isCatDisabled: getCatDisabled(state),
});

export default connect(mapStateToProps, { addCat })(NewCatContainer);
