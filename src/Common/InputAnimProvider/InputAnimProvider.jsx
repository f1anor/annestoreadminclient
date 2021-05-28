import React from "react";
import css from "./InputAnimProvider.module.css";
import { ReactComponent as PreloaderAnim } from "assets/svg/preloader2.svg";

const InputAnimProvider = ({ children, anim }) => {
  return (
    <div className={css.wrapper}>
      {children}
      {!!anim && <PreloaderAnim className={css.anim} />}
    </div>
  );
};
export default InputAnimProvider;
