import React from "react";
import css from "./InputAnimProvider.module.css";
import { ReactComponent as PreloaderAnim } from "assets/svg/preloader2.svg";

const InputAnimProvider = ({ children, anim, color, className = "" }) => {
  return (
    <div className={css.wrapper}>
      {children}
      {!!anim && (
        <PreloaderAnim
          className={[css.anim, className].join(" ")}
          style={{ stroke: color }}
        />
      )}
    </div>
  );
};
export default InputAnimProvider;
