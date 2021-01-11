import React, { useState } from "react";
import { connect } from "react-redux";
import { preloadImage } from "../../../../../../actions/product-actions";
import ImgLoader from "./ImgLoder";

const ImgLoaderContainer = ({ preloadImage, name, form, value }) => {
  console.log("VALUE: ", value);
  const [active, setActive] = useState(false);

  const handleChange = (e) => {
    const files = e.target.files;
    preloadImage(files, form, name, value);
  };

  const resetDefaults = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const hanleDragEnter = (e) => {
    resetDefaults(e);

    if (!active) setActive(true);
  };

  const handleDragOver = (e) => {
    resetDefaults(e);

    if (!active) setActive(true);
  };

  const handleDragLeave = (e) => {
    resetDefaults(e);

    if (!!active) setActive(false);
  };

  const handleDrop = (e) => {
    resetDefaults(e);

    if (!!active) setActive(false);

    const dt = e.dataTransfer;
    const files = dt.files;
    preloadImage(files, form, name, value);
  };

  return (
    <ImgLoader
      active={active}
      handleChange={handleChange}
      hanleDragEnter={hanleDragEnter}
      handleDragOver={handleDragOver}
      handleDragLeave={handleDragLeave}
      handleDrop={handleDrop}
    />
  );
};

export default connect(null, { preloadImage })(ImgLoaderContainer);
