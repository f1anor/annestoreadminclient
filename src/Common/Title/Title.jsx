import React from "react";
import { Spinner } from "react-bootstrap";
import css from "./Title.module.css";
import { ReactComponent as PreloaderAnim } from "assets/svg/preloader2.svg";

const Title = ({ children, anim, className = "" }) => {
  return (
    <div className={[css.wrapper, className].join(" ")}>
      <h2 className={css.title}>
        {children}{" "}
        {!!anim && (
          // <Spinner
          //   animation="grow"
          //   size="sm"
          //   variant="primary"
          //   className={css.spinner}
          // />
          <PreloaderAnim className={css.preloader} />
        )}
      </h2>
    </div>
  );
};

export default Title;
