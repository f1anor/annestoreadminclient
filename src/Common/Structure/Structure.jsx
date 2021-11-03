import AnimatedCard from "Common/AnimatedCard/AnimatedCard";
import ImgPreview from "Common/ImgPreviev/ImgPreview";
import React, { useState } from "react";
import { generateRandom } from "utils/utils";
import css from "./Structure.module.css";

const Structure = ({ products = [], onClick = () => {}, isDisabled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const tmp = generateRandom(1000, 9999).toString();

  const setEnable = () => {
    if (!!isOpen) return;
    setIsOpen(true);
  };

  const setDisable = (e) => {
    if (!isOpen || !!e.relatedTarget.closest(`div[data-wrapper='${tmp}']`))
      return;
    setIsOpen(false);
  };

  return (
    <div
      className={css.wrapper}
      onMouseOver={setEnable}
      onMouseOut={setDisable}
      data-wrapper={tmp}
    >
      <div>
        <ImgPreview
          img={products[0].imgs[0].small}
          onClick={() => onClick(products[0].imgs)}
          disabled={isDisabled}
        />
        {products.length > 1 && !isOpen && (
          <span className={css.badge}>{products.length}</span>
        )}
        {products.length > 1 && !!isOpen && (
          <AnimatedCard className={css.card}>
            {products.map((product) => (
              <ImgPreview
                img={product.imgs[0].small}
                key={product.imgs[0].small}
                onClick={() => onClick(product.imgs)}
              />
            ))}
          </AnimatedCard>
        )}
      </div>
    </div>
  );
};
export default Structure;
