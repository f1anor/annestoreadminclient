import React, { useRef } from "react";
import ImgList from "./ImgList";

const ImgListContainer = ({ ...props }) => {
  const wrapper = useRef();
  // const handleMouseOver = () => {
  //   document.querySelector("#scroll-wrapper").style.overflow = "hidden";
  // };
  // const handleMouseOut = () => {
  //   document.querySelector("#scroll-wrapper").style.overflow = "scroll";
  // };
  // const handleMooveWheel = (e) => {
  //   const target = wrapper.current;
  //   if (!target) return;
  //   target.scrollBy(e.deltaY, 0);
  // };

  return (
    <ImgList
      {...props}
      wrapper={wrapper}
      // handleMouseOver={handleMouseOver}
      // handleMouseOut={handleMouseOut}
      // handleMooveWheel={handleMooveWheel}
    />
  );
};

export default ImgListContainer;
