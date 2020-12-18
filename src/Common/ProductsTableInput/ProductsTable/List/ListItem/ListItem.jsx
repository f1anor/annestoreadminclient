import React from "react";
import { FormControl, InputGroup, Button } from "react-bootstrap";
import css from "./ListItem.module.css";

import { ReactComponent as TrashIcon } from "assets/svg/trash2-fill.svg";
import { formatNumber } from "../../../../../utils/utils";

const ListItem = ({
  product,
  handleSetAmount,
  handleRemove,
  editMode,
  setImg,
}) => {
  return (
    <tr className="border-top">
      <td className="w-50">{product.title}</td>
      <td>
        <div className={css.img}>
          <img
            src={`${process.env.REACT_APP_SERVER_ASSETS}${product.imgs.img1.small}`}
            alt="img"
            onClick={() =>
              setImg({
                src: `${process.env.REACT_APP_SERVER_ASSETS}${product.imgs.img1.large}`,
              })
            }
          />
        </div>
      </td>
      <td className="text-center">{formatNumber(product.article, 5)}</td>
      <td className="text-center">{product.price}₽</td>
      <td
        style={{
          paddingTop: "4px",
          paddingBottom: "4px",
        }}
      >
        <InputGroup style={{ width: "100px" }} className="ml-auto mr-auto">
          <FormControl
            readOnly={!editMode}
            aria-label="Amount (to the nearest dollar)"
            value={product.amount}
            onChange={(e) => handleSetAmount(e.target.value)}
          />
          <InputGroup.Append>
            <InputGroup.Text>шт.</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
      </td>
      <td className="text-center">{product.price * product.amount}₽</td>
      <td
        style={{
          paddingTop: "4px",
          paddingBottom: "4px",
        }}
      >
        <Button
          disabled={!editMode}
          onClick={handleRemove}
          variant="warning"
          className="d-block ml-auto mr-auto"
        >
          <TrashIcon />
        </Button>
      </td>
    </tr>
  );
};

export default ListItem;
