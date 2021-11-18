import FormBlockTitle from "Common/FormBlockTitle/FormBlockTitle";
import React, { forwardRef } from "react";
import css from "./CategoriesBorderedWrapper.module.css";

const CategoriesBorderedWrapper = (
  { children, title, total, ...props },
  ref
) => {
  return (
    <div className={css.wrapper}>
      <FormBlockTitle className={css.title}>{title}</FormBlockTitle>
      <div className={css.count}>
        Всего: <span>{total}</span> - 76 шт.
      </div>
      <div className={css.dragInner} ref={ref} data-marker="true">
        {children}
      </div>
    </div>
  );
};
export default forwardRef(CategoriesBorderedWrapper);
