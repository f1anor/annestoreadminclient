import React from "react";
import css from "./ImgPreview.module.css";

const ImgPreview = ({ img, onClick, className = "" }) => {
  if (!img) {
    return <></>;
  }
  return (
    <div className={[css.wrapper, className].join(" ")} onClick={onClick}>
      <img src={`${process.env.REACT_APP_SERVER_ASSETS}/${img}`} alt="" />
    </div>
  );
};

export default ImgPreview;
