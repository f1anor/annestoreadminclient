import React, { useRef, useState } from "react";
import Gallery from "./Gallery";
import { getCoords } from "utils/utils";

const GalleryContainer = ({ img, imgs, ...props }) => {
  const ref = useRef();

  const [current, setCurrent] = useState(img);

  const handleSlide = (e) => {
    const coords = getCoords(ref.current);
    const cursor = e.clientX - coords.left;

    const position = getPosition();

    if (cursor >= coords.width / 2) setNext(position);
    else setPrev(position);
  };

  const setPrev = (pos) => {
    if (pos === 0) {
      setCurrent(imgs[imgs.length - 1].large);
    } else {
      setCurrent(imgs[pos - 1].large);
    }
  };

  const setNext = (pos) => {
    if (pos === imgs.length - 1) {
      setCurrent(imgs[0].large);
    } else {
      setCurrent(imgs[pos + 1].large);
    }
  };

  const getPosition = () => {
    return imgs.findIndex((img) => img.large === current);
  };

  return (
    <Gallery
      imgs={imgs}
      handleSlide={handleSlide}
      current={current}
      setCurrent={setCurrent}
      ref={ref}
    />
  );
};
export default GalleryContainer;
