import React from "react";
import { ReactComponent as StackIcon } from "assets/svg/stackIcon.svg";

import css from "./ProductName.module.css";

const ProductName = ({ metaName, metaImg, id }) => {
  return (
    <div className={css.wrapper}>
      {!metaImg ? (
        <div className={css.imgWrapper}>
          <div className={css.imgContainer}>
            <StackIcon />
          </div>
        </div>
      ) : (
        <div className={css.productImg}>
          <img
            src={`${process.env.REACT_APP_SERVER_ASSETS}/${metaImg}`}
            alt="Продукт"
          />
        </div>
      )}

      <div className={css.title}>
        <h3 className={css.name}>{metaName}</h3>
        <p className={css.article}>Артикул: {id}</p>
      </div>
    </div>
  );
};

export default ProductName;
