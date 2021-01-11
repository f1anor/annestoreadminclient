import React from "react";
import css from "./ImgEditor.module.css";
import { ReactComponent as TrashIcon } from "assets/svg/trash.svg";
import { ReactComponent as LeftArrow } from "assets/svg/arrow-left-circle-fill.svg";
import { ReactComponent as RightArrow } from "assets/svg/arrow-right-circle-fill.svg";
import { ReactComponent as ZoomOut } from "assets/svg/zoom-out.svg";
import { ReactComponent as ZoomIn } from "assets/svg/zoom-in.svg";

const EditImage = ({
  img,
  width,
  height,
  orientation,
  currentX,
  currentY,
  zoom,
  handleMouseDown,
  handleZoomOut,
  handleZoomIn,
  handleStopCheckSize,
  clear,
  handleMoveLeft,
  handleMoveRight,
}) => {
  return (
    <div className={css.wrapper}>
      <div className={css.content}>
        <div
          className={css.sliderWrapper}
          style={{ width: width + "px", height: height + "px" }}
        >
          <div
            style={{
              marginLeft: `${currentX}px`,
              marginTop: `${currentY}px`,
              transform: `scale(${zoom}, ${zoom})`,
            }}
            onTransitionEnd={handleStopCheckSize}
            className={[css.slider, orientation ? css[orientation] : ""].join(
              " "
            )}
            onMouseDown={handleMouseDown}
            role="button"
            tabIndex="0"
          >
            <img
              src={img}
              alt="edit"
              onDragStart={(event) => {
                event.preventDefault();
                return false;
              }}
            />
          </div>
          <button className={css.clear} onClick={clear}>
            <TrashIcon />
          </button>
        </div>
      </div>
      <div className={css.moveBtns}>
        <button className={css.left} onClick={handleMoveLeft}>
          <LeftArrow />
        </button>
        <button type="button" className={css.zoomBtn} onClick={handleZoomOut}>
          <ZoomOut />
        </button>
        <button type="button" className={css.zoomBtn} onClick={handleZoomIn}>
          <ZoomIn />
        </button>
        <button className={css.right} onClick={handleMoveRight}>
          <RightArrow />
        </button>
      </div>
    </div>
  );
};

export default EditImage;
