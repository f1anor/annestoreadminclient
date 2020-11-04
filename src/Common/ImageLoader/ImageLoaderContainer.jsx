import React from "react";
import { connect } from "react-redux";
import { preloadImage } from "../../actions/product-actions";
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

const mapDispatchToProps = {
  preloadImage,
};

export default connect(null, mapDispatchToProps)(ImageLoaderContainer);
