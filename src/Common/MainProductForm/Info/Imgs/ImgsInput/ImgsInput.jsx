import React from "react";
import ImgListContainer from "./ImgList/ImgListContainer";
import ImgLoaderContainer from "./ImgLoader/ImgLoaderContainer";
import css from "./ImgsInput.module.css";

const ImgsInput = ({ value, name, form }) => {
  return (
    <div className={css.wrapper}>
      <ImgLoaderContainer value={value} name={name} form={form} />
      {value.length > 0 && (
        <ImgListContainer name={name} form={form} value={value} />
      )}
    </div>
  );
};

export default ImgsInput;
