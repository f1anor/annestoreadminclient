import React from "react";
import EditImageContainer from "./EditImage/EditImageContainer";

import css from "./ImageLoader.module.css";

const ImageLoader = ({
  input,
  handlePreloadImg,
  width,
  height,
  form,
  Label,
  className = "",
}) => {
  const { value } = input;

  const isLoaded = value.avatarTmp;
  return (
    <div className={css.wrapper}>
      <div
        className={[css.imgWrapper, className].join(" ")}
        style={{ width: width + "px", height: height + "px" }}
      >
        {!isLoaded && !Label && (
          <label className={css.label}>
            <input
              type="file"
              className={css.input}
              onChange={handlePreloadImg}
              name="myImage"
            />
          </label>
        )}
        {!isLoaded && !!Label && (
          <Label>
            <input
              type="file"
              className={css.input}
              onChange={handlePreloadImg}
              name="myImage"
            />
          </Label>
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
