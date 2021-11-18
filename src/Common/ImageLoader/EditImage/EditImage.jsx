import React from "react";
import css from "./EditImage.module.css";

const ImgEditor = ({
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
          <div className={css.btns}>
            <button
              type="button"
              className={css.zoomBtn}
              onClick={handleZoomOut}
            >
              -
            </button>
            <button
              type="button"
              className={css.zoomBtn}
              onClick={handleZoomIn}
            >
              +
            </button>
          </div>

          <button className={css.clear} onClick={clear}>
            &times;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImgEditor;
