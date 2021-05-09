import React from "react";
import Publication from "./Publication/Publication";

import css from "./MainProductForm.module.css";
import CategoriesContainer from "./Categories/CategoriesContainer";
import Main from "./Info/Main";
import SizeContainer from "./Size/SizeContainer";

const MainProductForm = ({
  catForForm,
  isCatFetching,
  preloadImage,
  setTooltip,
  form,
  error,
}) => {
  return (
    <div className={css.wrapper}>
      <div className={css.leftSide}>
        <Main
          preloadImage={preloadImage}
          setTooltip={setTooltip}
          form={form}
          error={error}
        />
      </div>
      <div className={css.rightSide}>
        <Publication />
        <SizeContainer form={form} />
        <CategoriesContainer
          catForForm={catForForm}
          isCatFetching={isCatFetching}
          form={form}
        />
      </div>
    </div>
  );
};

export default MainProductForm;
