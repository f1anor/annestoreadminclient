import React from "react";
import css from "./Title.module.css";
import { ReactComponent as PreloaderAnim } from "assets/svg/preloader2.svg";

const Title = ({ children, anim, className = "", button }) => {
  return (
    <div
      className={[css.wrapper, className, !!button ? css.double : ""].join(" ")}
    >
      <h2 className={css.title}>
        {children} {!!anim && <PreloaderAnim className={css.preloader} />}
      </h2>
      {!!button && button}
    </div>
  );
};

export default Title;
