import React from "react";
import css from "./ListItem.module.css";

import { ReactComponent as TrashIcon } from "assets/svg/trash2-fill.svg";
import { formatNumber } from "utils/utils";
import Amount from "./Amount/Amount";

const ListItem = ({
  product,
  img,
  handleDec,
  handleInc,
  handleRemove,
  editMode,
}) => {
  //TODO: Вывод изображений в главный модал
  return (
    <tr>
      <td className="w-50">{product.title}</td>
      <td>
        <div className={css.img}>
          {!!img ? (
            <img
              src={`${process.env.REACT_APP_SERVER_ASSETS}${img}`}
              alt="img"
            />
          ) : (
            "test"
          )}
        </div>
      </td>
      <td className="text-center">{formatNumber(product.id, 5)}</td>
      <td className="text-center">{product.price}₽</td>
      <td className={css.amount}>
        <Amount value={product.amount} dec={handleDec} inc={handleInc} />
      </td>
      <td className={css.remove}>
        <button className={css.removeBtn} onClick={handleRemove} type="button">
          <TrashIcon />
        </button>
      </td>
      <td className="text-center">{product.price * product.amount}₽</td>
    </tr>
  );
};

export default ListItem;
