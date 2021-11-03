import React, { forwardRef } from "react";
import { generateRandom } from "utils/utils";
import css from "./Gallery.module.css";

const Gallery = ({ current, handleSlide, setCurrent, imgs }, ref) => {
  const random = generateRandom(1001, 9999);

  return (
    <div className={css.imgContainer}>
      <img
        src={`${process.env.REACT_APP_SERVER_ASSETS}${current}?${random}`}
        alt={current}
        onDragStart={(e) => e.preventDefault()}
        onClick={handleSlide}
        ref={ref}
      />
      {imgs.length > 1 && (
        <div className={css.gallery}>
          {imgs.map((img) => (
            <div className={css.galleryImg} key={img.medium}>
              <img
                src={`${process.env.REACT_APP_SERVER_ASSETS}${img.medium}?${random}`}
                alt={img.medium}
                onDragStart={(e) => e.preventDefault()}
                onClick={() => setCurrent(img.large)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default forwardRef(Gallery);
