import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { addCat, setModalNew } from "../../../actions/cat-actions";
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
  const dispatch = useDispatch();
  useEffect(() => {
    selector = formValueSelector(form);
  }, [form]);

  const [isOpen, setOpen] = useState(true);

  const handleSetOpen = () => {
    if (!isOpen) setOpen(true);
    else setOpen(false);
  };

  const handleNewModalOpen = () => {
    dispatch(setModalNew(true));
  };

  return (
    <Categories
      handleNewModalOpen={handleNewModalOpen}
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
