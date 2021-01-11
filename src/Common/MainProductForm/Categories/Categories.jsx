import React from "react";
import { Field } from "redux-form";
import FormBlock from "../../FormBlock/FormBlock";
import FormBlockTitle from "../../FormBlockTitle/FormBlockTitle";
import AddModal from "./AddModal/AddModal";
import css from "./Categories.module.css";
import CategoryInputContainer from "./CategoryInput/CategoryInputContainer";

const Categories = ({
  catForForm,
  modalAddShow,
  setModalAddShow,
  handleAddCategory,
  catAdding,
  catMessage,
}) => {
  return (
    <FormBlock className={css.wrapper}>
      <FormBlockTitle>Категории</FormBlockTitle>
      <Field
        name="category"
        component={CategoryInputContainer}
        cat={catForForm}
      />
      <button
        type="button"
        className={css.addCatBtn}
        onClick={() => setModalAddShow(true)}
      >
        + Добавить категорию
      </button>

      <AddModal
        show={!!modalAddShow}
        handler={handleAddCategory}
        title="Добавить категорию"
        placeholder="Имя"
        inProgress={catAdding}
        message={catMessage}
        onHide={() => setModalAddShow(null)}
      />
    </FormBlock>
  );
};

export default Categories;
