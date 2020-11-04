import React from "react";
import css from "./Product.module.css";
import { ReactComponent as ImageIcon } from "assets/svg/image.svg";
import { Link } from "react-router-dom";

const Product = ({
  product,
  setModalShow,
  selected,
  handleAddSelected,
  getProdDisabled,
}) => {
  const { imgs } = product;
  const img1 = imgs && imgs.img1.large;
  const img2 = imgs && imgs.img2.large;
  const img3 = imgs && imgs.img3.large;

  const time = !!product.time
    ? new Date(product.time).toLocaleString("ru", {
        hour: "2-digit",
        minute: "2-digit",
        day: "numeric",
        month: "numeric",
        year: "2-digit",
      })
    : "";

  const sel = !!selected.find((id) => id.toString() === product._id.toString());
  return (
    <tr className={sel ? "table-warning" : ""}>
      <td className={css.checkWrapper}>
        <input
          disabled={!!getProdDisabled}
          type="checkbox"
          onChange={(e) => handleAddSelected(e, product._id)}
          checked={sel ? "checked" : ""}
          className={css.check}
        />
      </td>
      <td>{time}</td>
      <td>
        <Link to={`/products/edit/${product.article}`}>{product.article}</Link>
      </td>
      <td>{product.title}</td>
      <td>{product.category}</td>
      <td className={css.imgs}>
        <div className={css.imgsWrapper}>
          {img1 && (
            <ImageIcon
              className={css.icon}
              onClick={() =>
                setModalShow({
                  src: `${process.env.REACT_APP_SERVER_ASSETS}${img1}`,
                  name: "1 (Титульное)",
                })
              }
            />
          )}
          {img2 && (
            <ImageIcon
              className={css.icon}
              onClick={() =>
                setModalShow({
                  src: `${process.env.REACT_APP_SERVER_ASSETS}${img2}`,
                  name: "2",
                })
              }
            />
          )}
          {img3 && (
            <ImageIcon
              className={css.icon}
              onClick={() =>
                setModalShow({
                  src: `${process.env.REACT_APP_SERVER_ASSETS}${img3}`,
                  name: "3",
                })
              }
            />
          )}
        </div>
      </td>
      <td>{product.price} ₽</td>
    </tr>
  );
};

export default Product;
