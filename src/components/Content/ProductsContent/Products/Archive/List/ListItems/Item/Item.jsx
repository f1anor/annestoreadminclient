import React from "react";
import CheckboxInput from "Common/CheckboxInput/CheckboxInput";
import { formatNumber } from "utils/utils";
import ImgPreview from "Common/ImgPreviev/ImgPreview";
import css from "./Item.module.css";
import MenuContainer from "./Menu/MenuContainer";

const Item = React.memo(
  ({
    product,
    time,
    handleSetImg,
    handleAddSelected,
    isProdDisabled,
    selected,
  }) => {
    const { imgs } = product;

    const sel = !!selected.find(
      (id) => id.toString() === product._id.toString()
    );
    return (
      <tr className={sel ? "table-warning" : ""}>
        <td className={css.check}>
          <CheckboxInput
            checked={sel ? "checked" : ""}
            onChange={handleAddSelected}
            disabled={!!isProdDisabled}
            className={css.checkbox}
          />
        </td>
        <td className={css.art}>#{formatNumber(product._id, 5)}</td>
        <td className={css.imgs}>
          {imgs.length > 0 && (
            <ImgPreview
              key={imgs[0].small}
              img={imgs[0].small}
              onClick={handleSetImg}
            />
          )}
        </td>
        <td>{product.title}</td>
        <td className={css.date}>{time}</td>
        <td className={css.price}>
          {product.starsCount > 0 ? product.stars / product.starsCount : "Нет"}
        </td>
        <td className={css.price}>{product.views}</td>
        <td className={css.price}>{product.price} ₽</td>
        <td>
          <MenuContainer id={product._id} />
        </td>
      </tr>
    );
  }
);

export default Item;
