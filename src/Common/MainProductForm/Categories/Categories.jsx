import React from "react";
import { Field } from "redux-form";
import FormBlock from "Common/FormBlock/FormBlock";
import FormBlockTitle from "Common/FormBlockTitle/FormBlockTitle";
import OpenAnim from "Common/OpenAnim/OpenAnim";
import css from "./Categories.module.css";
import CategoryInputContainer from "./CategoryInput/CategoryInputContainer";
import ArrowBtn from "Common/ArrowBtn/ArrowBtn";
import Button from "Common/Button/Button";

const Categories = ({
  catForForm,
  isCatFetching,
  catValues = [],
  handleSetOpen,
  isOpen,
  handleNewModalOpen,
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
          <Button
            type="button"
            mini={true}
            disabled={!!isCatFetching}
            onClick={handleNewModalOpen}
          >
            Новая
          </Button>
        </div>
      </OpenAnim>
    </FormBlock>
  );
};
console.log(123);
export default Categories;
