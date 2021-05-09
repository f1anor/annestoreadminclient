import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addCat } from "../../../actions/cat-actions";
import { getIsBisy } from "selectors/cat-selectors";
import Categories from "./Categories";
import { formValueSelector } from "redux-form";

let selector;

const CategoriesContainer = ({
  addCat,
  catAdding,
  catMessage,
  form,
  ...props
}) => {
  useEffect(() => {
    selector = formValueSelector(form);
  }, [form]);

  const [isOpen, setOpen] = useState(true);

  const handleSetOpen = () => {
    if (!isOpen) setOpen(true);
    else setOpen(false);
  };

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
      isOpen={isOpen}
      handleSetOpen={handleSetOpen}
      {...props}
    />
  );
};

const mapStateToProps = (state) => ({
  catAdding: getIsBisy(state),
  catMessage: state.category.message,
  catValues: selector && selector(state, "category"),
});

export default connect(mapStateToProps, { addCat })(CategoriesContainer);
