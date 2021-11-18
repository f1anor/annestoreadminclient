import React from "react";
import css from "./ModalTitle.module.css";
import { ReactComponent as PreloaderAnim } from "assets/svg/preloader2.svg";

const ModalTitle = ({ icon, children, anim, className = " " }) => {
  return (
    <h4 className={[css.title, className].join(" ")}>
      {icon}
      {children}
      {!!anim && <PreloaderAnim className={css.preloader} />}
    </h4>
  );
};

export default ModalTitle;
