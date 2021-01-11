import React from "react";
import Publication from "./Publication/Publication";

import css from "./MainProductForm.module.css";
import Info from "./Info/Info";
import Size from "./Size/Size";
import CategoriesContainer from "./Categories/CategoriesContainer";

const MainProductForm = ({ catForForm, preloadImage, setTooltip }) => {
  return (
    <div className={css.wrapper}>
      <div className={css.leftSide}>
        <Info preloadImage={preloadImage} setTooltip={setTooltip} />
      </div>
      <div className={css.rightSide}>
        <Publication />
        <CategoriesContainer catForForm={catForForm} />
        <Size />
      </div>
    </div>
  );
};

export default MainProductForm;
