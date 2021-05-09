import React from "react";
import ListItemContainer from "./ListItem/ListItemContainer";
import css from "./List.module.css";

const List = ({ value, form, editMode, sum }) => {
  return (
    <tbody>
      {value.map((item) => (
        <ListItemContainer
          key={item.id}
          product={item}
          form={form}
          value={value}
          editMode={editMode}
          css={css}
        />
      ))}
      <tr className="border-top">
        <td>Итого</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td className="text-center">{sum}₽</td>
      </tr>
    </tbody>
  );
};

export default List;
