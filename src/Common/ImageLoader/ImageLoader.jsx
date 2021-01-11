import React from "react";
import EditImageContainer from "./EditImage/EditImageContainer";

import css from "./ImageLoader.module.css";

const ImageLoader = ({
  input,
  handlePreloadImg,
  width,
  height,
  form,
  className = "",
}) => {
  const { value } = input;

  const isLoaded = value.preloadedImg;
  return (
    <div className={[css.wrapper, className].join(" ")}>
      <div
        className={css.imgWrapper}
        style={{ width: width + "px", height: height + "px" }}
      >
        {!isLoaded && (
          <label className={css.label}>
            <input
              type="file"
              className={css.input}
              onChange={handlePreloadImg}
              name="myImage"
            />
          </label>
        )}
        {!!isLoaded && (
          <EditImageContainer
            img={`${
              process.env.REACT_APP_SERVER_ASSETS
            }${isLoaded}?${Math.random()}`}
            input={input}
            width={width}
            height={height}
            form={form}
          />
        )}
      </div>
    </div>
  );
};

export default ImageLoader;
