import React from "react";
import ImgContainer from "./Img/ImgContainer";
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
      {value.map((item) => (
        <ImgContainer
          key={item.preloadImg}
          form={form}
          element={item}
          value={value}
          name={name}
        />
      ))}

      <span className={css.main}>Основное</span>
    </div>
  );
};

export default ImgList;
