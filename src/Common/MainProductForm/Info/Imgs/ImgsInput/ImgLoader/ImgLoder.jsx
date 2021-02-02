import React from "react";
import css from "./ImgLoader.module.css";
import { ReactComponent as UploadIcon } from "assets/svg/upload.svg";

const ImgLoader = ({
  active,
  handleChange,
  hanleDragEnter,
  handleDragOver,
  handleDragLeave,
  handleDrop,
}) => {
  return (
    <label
      className={[css.loaderWrapper, active ? css.active : ""].join(" ")}
      onDragEnter={hanleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input type="file" multiple accept="image/*" onChange={handleChange} />
      <div className={css.info}>
        <UploadIcon />
        <div className={css.infoText}>
          Перетащите изображения <br /> или <span>нажмите</span> для выбора и
          загрузки.
        </div>
        <div className={css.subInfo}>
          Максимальный размер изображения 5000x5000px
        </div>
      </div>
    </label>
  );
};

export default ImgLoader;
