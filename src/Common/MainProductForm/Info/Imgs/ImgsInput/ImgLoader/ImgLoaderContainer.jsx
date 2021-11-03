import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { preloadImage } from "actions/product-actions";
import ImgLoader from "./ImgLoder";

const ImgLoaderContainer = ({ name, form, value = [] }) => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);

  const checkTotal = (files) => {
    if (!files && !files.length) return;
    const newFiles = Array.from(files);
    if (newFiles.length + value.length > 10) {
      newFiles.length = 10 - value.length;
    }
    return newFiles;
  };

  const handleChange = (e) => {
    const files = checkTotal(e.target.files);
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
    const files = checkTotal(dt.files);

    dispatch(preloadImage(files, form, name, value));
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

export default ImgLoaderContainer;
