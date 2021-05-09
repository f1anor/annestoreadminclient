import React from "react";
import CheckboxInput from "Common/CheckboxInput/CheckboxInput";
import { formatNumber } from "../../../../../../../utils/utils";
import ImgPreview from "../../../../../../../Common/ImgPreviev/ImgPreview";
import css from "./Item.module.css";

const Item = React.memo(
  ({ product, setImg, handleAddSelected, isProdDisabled, selected }) => {
    const { imgs } = product;

    const time =
      product.time &&
      new Date(product.time).toLocaleString("ru", {
        day: "2-digit",
        month: "2-digit",
      });

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
        <td className={css.date}>{time}</td>
        <td className={css.art}>{formatNumber(product._id, 5)}</td>
        <td className={css.price}>{product.price} ₽</td>
      </tr>
    );
  }
);

export default Item;
