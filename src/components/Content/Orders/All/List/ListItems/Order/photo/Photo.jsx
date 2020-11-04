import React from "react";
import css from "./Photo.module.css";

const Photo = ({ products, setModalImgShow }) => {
  console.log(products);
  return (
    <td>
      {products.map((product) => (
        <div className="d-flex align-items-center" key={product.id}>
          <img
            src={`${process.env.REACT_APP_SERVER_ASSETS}${product.imgs.img1.small}`}
            className={css.img}
            onClick={() =>
              setModalImgShow({
                src: `${process.env.REACT_APP_SERVER_ASSETS}${product.imgs.img1.small}`,
              })
            }
            alt="product"
          />
          {product.amount > 1 && <div className="ml-2">x {product.amount}</div>}
        </div>
      ))}
    </td>
  );
};

export default Photo;
