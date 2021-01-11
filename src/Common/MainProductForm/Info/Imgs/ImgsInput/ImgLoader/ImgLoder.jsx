import React from "react";
import css from "./ImgLoader.module.css";

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
    </label>
  );
};

export default ImgLoader;
