import React from "react";
import css from "./ImgNoEdit.module.css";
import { ReactComponent as TrashIcon } from "assets/svg/trash.svg";
import { ReactComponent as LeftArrow } from "assets/svg/arrow-left-circle-fill.svg";
import { ReactComponent as RightArrow } from "assets/svg/arrow-right-circle-fill.svg";

const ImgNoEdit = ({
  img,
  width,
  height,
  handleMoveLeft,
  handleMoveRight,
  handleRemove,
}) => {
  return (
    <div className={css.wrapper}>
      <div className={css.content}>
        <img
          src={img}
          style={{ width: width + "px", height: height + "px" }}
          alt="noedit"
          className={css.img}
          onDragStart={(event) => {
            event.preventDefault();
            return false;
          }}
        />
      </div>
      <button className={css.clear} type="button" onClick={handleRemove}>
        <TrashIcon />
      </button>
      <div className={css.moveBtns}>
        <button type="button" className={css.left} onClick={handleMoveLeft}>
          <LeftArrow />
        </button>
        <button type="button" className={css.right} onClick={handleMoveRight}>
          <RightArrow />
        </button>
      </div>
    </div>
  );
};

export default ImgNoEdit;
