import React from "react";
import { formatNumber } from "utils/utils";
import ImgPreview from "Common/ImgPreviev/ImgPreview";
import css from "./Item.module.css";
import CheckboxInput from "Common/CheckboxInput/CheckboxInput";
import TooltipBtn from "Common/TooltipBtn/TooltipBtn";
import Toggler from "Common/Toggler/Toggler";
import MenuContainer from "./Menu/MenuContainer";

const Item = ({
  product,
  selected,
  handleAddSelected,
  prodDisabled,
  handleToggleStatus,
  handleSetImg,
  time,
}) => {
  const { imgs } = product;

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
      <td>#{formatNumber(product._id, 5)}</td>
      <td className={css.imgs}>
        {imgs.length > 0 && (
          <ImgPreview
            key={imgs[0].small}
            img={imgs[0].small}
            onClick={() =>
              handleSetImg({
                imgs: imgs,
                comments: product._id,
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

      <td className={css.amount}>{product.amount}</td>
      <td className={css.stars}>
        {product.starsCount === 0 ? "Нет" : product.stars / product.starsCount}
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
      <td>
        <MenuContainer id={product._id} />
      </td>
    </tr>
  );
};

export default Item;
