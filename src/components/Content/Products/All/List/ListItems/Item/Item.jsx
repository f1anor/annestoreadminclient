import React from "react";
import { formatNumber } from "utils/utils";
import { Link } from "react-router-dom";
import ImgPreview from "Common/ImgPreviev/ImgPreview";
import css from "./Item.module.css";
import CheckboxInput from "Common/CheckboxInput/CheckboxInput";
import TooltipBtn from "Common/TooltipBtn/TooltipBtn";
import Toggler from "Common/Toggler/Toggler";

const Item = ({
  product,
  selected,
  handleAddSelected,
  prodDisabled,
  handleToggleStatus,
  setImg,
}) => {
  const { imgs } = product;
  const time = !!product.time
    ? new Date(product.time).toLocaleDateString("ru", {
        day: "numeric",
        month: "numeric",
      })
    : "";

  const sel = !!selected.find((id) => id.toString() === product._id.toString());
  return (
    <tr className={sel ? "table-warning" : ""}>
      <td className={css.checkWrapper}>
        <CheckboxInput
          disabled={!!prodDisabled}
          onChange={handleAddSelected}
          checked={sel ? "checked" : ""}
          className={css.check}
        />
      </td>
      <td className={css.imgs}>
        {imgs.length > 0 && (
          <ImgPreview
            key={imgs[0].small}
            img={imgs[0].small}
            onClick={() =>
              setImg({
                src: `${process.env.REACT_APP_SERVER_ASSETS}${imgs[0].large}`,
                name: "",
              })
            }
          />
        )}
      </td>
      <td>{product.title}</td>
      <td className={css.category}>
        {product.category[0]}{" "}
        {product.category.length > 1 && (
          <TooltipBtn
            className={css.tooltip}
            value={product.category.join(", ")}
          />
        )}
      </td>
      <td className={css.time}>{time}</td>
      <td className={css.art}>
        <Link to={`/editproduct/${product._id}`}>
          {formatNumber(product._id, 5)}
        </Link>
      </td>
      <td className={css.amount}>{product.amount}</td>
      <td className={css.views}>{product.views}</td>
      <td className={css.stars}>
        {product.starsCount === 0 ? "Нет" : product.stars / product.starsCount}
      </td>
      <td className={css.comments}>
        {product.comments.length === 0 ? (
          "Нет"
        ) : (
          <Link to={`/comments/${product._id}?page=1`}>
            {product.comments.length}
          </Link>
        )}
      </td>
      <td className={css.price}>{product.price} ₽</td>
      <td className={css.status}>
        <Toggler
          handler={handleToggleStatus}
          className={css.toggler}
          value={!!product.active}
          disabled={!!prodDisabled}
        />
      </td>
    </tr>
  );
};

export default Item;
