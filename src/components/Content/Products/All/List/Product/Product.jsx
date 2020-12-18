import React from "react";
import css from "./Product.module.css";
import { ReactComponent as ImageIcon } from "assets/svg/image.svg";
import { Link } from "react-router-dom";
import { formatNumber } from "../../../../../../utils/utils";
import ImgPreview from "../../../../../../Common/ImgPreviev/ImgPreview";

const Product = ({
  product,
  selected,
  handleAddSelected,
  getProdDisabled,
  setImg,
}) => {
  const { imgs } = product;
  const img1 = imgs && imgs.img1;
  const img2 = imgs && imgs.img2;
  const img3 = imgs && imgs.img3;

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
        <Link to={`/products/edit/${product.article}`}>
          {formatNumber(product.article, 5)}
        </Link>
      </td>
      <td>{product.title}</td>
      <td>{product.category}</td>
      <td className={css.imgs}>
        <div className={css.imgsWrapper}>
          <ImgPreview
            img={img1.small}
            onClick={() =>
              setImg({
                src: `${process.env.REACT_APP_SERVER_ASSETS}${img1.large}`,
                name: "1 (Титульное)",
              })
            }
          />
          <ImgPreview
            img={img2.small}
            onClick={() =>
              setImg({
                src: `${process.env.REACT_APP_SERVER_ASSETS}${img2.large}`,
                name: "2",
              })
            }
          />
          <ImgPreview
            img={img3.small}
            onClick={() =>
              setImg({
                src: `${process.env.REACT_APP_SERVER_ASSETS}${img3.large}`,
                name: "3",
              })
            }
          />
        </div>
      </td>
      <td>{product.price} ₽</td>
    </tr>
  );
};

export default Product;
