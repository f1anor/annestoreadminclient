import AnimatedCard from "Common/AnimatedCard/AnimatedCard";
import ImgPreview from "Common/ImgPreviev/ImgPreview";
import React, { useState } from "react";
import css from "./Structure.module.css";

const Structure = ({ products = [], isDisabled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const setEnable = () => {
    if (!!isOpen) return;
    setIsOpen(true);
  };

  const setDisable = (e) => {
    if (!isOpen || !!e.relatedTarget.closest("div[data-wrapper]")) return;
    setIsOpen(false);
  };

  const imgs = products.map((product) => product.imgs[0]).reverse();
  return (
    <div
      className={css.wrapper}
      onMouseOver={setEnable}
      onMouseOut={setDisable}
      data-wrapper={true}
    >
      <div>
        <ImgPreview img={imgs[0].small} disabled={isDisabled} />
        {imgs.length > 1 && !isOpen && (
          <span className={css.badge}>{imgs.length}</span>
        )}
        {imgs.length > 1 && !!isOpen && (
          <AnimatedCard className={css.card}>
            {imgs.map((img) => (
              <ImgPreview img={img.small} key={img.small} />
            ))}
          </AnimatedCard>
        )}
      </div>
    </div>
  );
};
export default Structure;
