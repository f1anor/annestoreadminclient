import React from "react";
import { Field } from "redux-form";
import FormBlock from "../../FormBlock/FormBlock";
import FormBlockTitle from "../../FormBlockTitle/FormBlockTitle";
import OpenAnim from "../../OpenAnim/OpenAnim";
import AddModal from "./AddModal/AddModal";
import css from "./Categories.module.css";
import CategoryInputContainer from "./CategoryInput/CategoryInputContainer";
import ArrowBtn from "../../ArrowBtn/ArrowBtn";

const Categories = ({
  catForForm,
  modalAddShow,
  setModalAddShow,
  handleAddCategory,
  catAdding,
  catMessage,
  isCatFetching,
  catValues = [],
  handleSetOpen,
  isOpen,
}) => {
  return (
    <FormBlock className={css.wrapper}>
      <FormBlockTitle counter={`${catValues.length}/${catForForm.length}`}>
        Категории
        <ArrowBtn onClick={handleSetOpen} down={!!isOpen} />
      </FormBlockTitle>

      <OpenAnim isOpen={isOpen}>
        {catForForm.length > 0 && (
          <Field
            name="category"
            component={CategoryInputContainer}
            cat={catForForm}
          />
        )}
        <div className={css.btns}>
          <button
            type="button"
            className={css.addCatBtn}
            onClick={() => setModalAddShow(true)}
            disabled={!!isCatFetching}
          >
            Новая
          </button>
        </div>
      </OpenAnim>
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
