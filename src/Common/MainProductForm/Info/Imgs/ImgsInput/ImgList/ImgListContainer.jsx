import React from "react";
import ImgList from "./ImgList";

const ImgListContainer = ({ value, ...props }) => {
  const imgs = Array.from(value).sort((a, b) => a.id - b.id);
  // const imgs = Array.from(value);
  return <ImgList value={imgs} {...props} />;
};

export default ImgListContainer;
