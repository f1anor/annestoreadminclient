import React from "react";
import CheckboxInput from "Common/CheckboxInput/CheckboxInput";
import { formatNumber } from "../../../../../../../utils/utils";
import ImgPreview from "../../../../../../../Common/ImgPreviev/ImgPreview";
import css from "./Item.module.css";

const Item = ({
  product,
  setImg,
  handleAddSelected,
  isProdDisabled,
  selected,
}) => {
  const { imgs } = product;
  const img1 = imgs && imgs.img1;
  const img2 = imgs && imgs.img2;
  const img3 = imgs && imgs.img3;
  const time =
    product.time &&
    new Date(product.time).toLocaleString("ru", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });

  const sel = !!selected.find((id) => id.toString() === product._id.toString());
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
      <td>{time}</td>
      <td>{formatNumber(product._id, 5)}</td>
      <td>{product.title}</td>
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

export default Item;
