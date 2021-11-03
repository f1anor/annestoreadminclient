import React from "react";
import { generateRandom } from "utils/utils";
import css from "./ImgPreview.module.css";

const ImgPreview = ({ img, onClick, className = "", disabled }) => {
  if (!img) {
    return <></>;
  }

  const random = generateRandom(1001, 9999);
  return (
    <button
      disabled={disabled}
      className={[css.wrapper, className].join(" ")}
      onClick={onClick}
    >
      <img
        src={`${process.env.REACT_APP_SERVER_ASSETS}/${img}?${random}`}
        alt=""
      />
    </button>
  );
};

export default ImgPreview;
