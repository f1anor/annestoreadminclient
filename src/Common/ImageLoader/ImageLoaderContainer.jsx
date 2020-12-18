import React from "react";
import ImageLoader from "./ImageLoader";

const ImageLoaderContainer = ({ preloadImage, input, ...props }) => {
  const { form } = props.meta;

  const handlePreloadImg = (e) => {
    const { files } = e.target;
    preloadImage(files[0], input.name);
  };
  return (
    <ImageLoader
      handlePreloadImg={handlePreloadImg}
      input={input}
      form={form}
      {...props}
    />
  );
};

export default ImageLoaderContainer;
