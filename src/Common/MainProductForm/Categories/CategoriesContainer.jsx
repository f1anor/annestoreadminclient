import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addCat } from "../../../actions/cat-actions";
import { getCatDisabled } from "../../../selectors/cat-selectors";
import Categories from "./Categories";

const CategoriesContainer = ({ addCat, catAdding, catMessage, ...props }) => {
  console.log("error", catMessage);
  const [modalAddShow, setModalAddShow] = useState(null);

  const handleAddCategory = (title) => {
    addCat(title);
  };

  useEffect(() => {
    if (!catAdding && !catMessage) setModalAddShow(false);
  }, [catAdding, catMessage]);

  return (
    <Categories
      modalAddShow={modalAddShow}
      setModalAddShow={setModalAddShow}
      handleAddCategory={handleAddCategory}
      catAdding={catAdding}
      catMessage={catMessage}
      {...props}
    />
  );
};

const mapStateToProps = (state) => ({
  catAdding: getCatDisabled(state),
  catMessage: state.category.message,
});

export default connect(mapStateToProps, { addCat })(CategoriesContainer);
