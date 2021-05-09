import React from "react";
import FormBlock from "Common/FormBlock/FormBlock";
import FormBlockTitle from "Common/FormBlockTitle/FormBlockTitle";
import css from "./Find.module.css";
import FindForm from "./FindForm/FindForm";

const Find = ({ handleCheckArticle, id }) => {
  return (
    <FormBlock className={css.wrapper}>
      <FormBlockTitle>Найти продукт</FormBlockTitle>
      <FindForm onSubmit={handleCheckArticle} id={id} />
    </FormBlock>
  );
};

export default Find;
