import React from "react";
import css from "./Imgs.module.css";
import { Field } from "redux-form";
// import ImageLoaderContainer from "Common/ImageLoader/ImageLoaderContainer";
// import { ReactComponent as UploadIcon } from "assets/svg/upload.svg";
// import { ReactComponent as ArrowDown } from "assets/svg/arrow-down.svg";
// import OpenAnim from "../../../OpenAnim/OpenAnim";
import ImgsInputContainer from "./ImgsInput/ImgsInputContainer";

const Imgs = ({ preloadImage, img2, img3, setImg2, setImg3 }) => {
  return (
    <div className={css.wrapper}>
      <Field name="imgs" component={ImgsInputContainer} />
    </div>
  );
};

export default Imgs;
