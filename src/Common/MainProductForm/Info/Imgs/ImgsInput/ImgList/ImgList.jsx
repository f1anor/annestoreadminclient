import React from "react";
import ImgEditorContainer from "../ImgEditor/ImgEditorContainer";
import css from "./ImgList.module.css";

const ImgList = ({
  name,
  form,
  value,
  handleMooveWheel,
  handleMouseOver,
  handleMouseOut,
  wrapper,
}) => {
  return (
    <div
      className={css.wrapper}
      onWheel={handleMooveWheel}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      ref={wrapper}
    >
      {value.length > 0 &&
        value
          .sort((a, b) => a.id - b.id)
          .map((item) => (
            <ImgEditorContainer
              element={item}
              key={item.preloadImg}
              value={value}
              form={form}
              name={name}
              width={348}
              height={348}
            />
          ))}
      <span className={css.main}>Основное</span>
    </div>
  );
};

export default ImgList;
