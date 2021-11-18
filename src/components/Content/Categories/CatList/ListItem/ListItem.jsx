import React from "react";
import FormBlock from "Common/FormBlock/FormBlock";

import css from "./ListItem.module.css";
import MenuContainer from "./Menu/MenuContainer";

const ListItem = ({
  category,

  color,
  first,
  last,
}) => {
  const date = !!category.date
    ? new Date(+category.date).toLocaleString("ru", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <div data-dragndrop={true}>
      <div className={css.phantom} data-position={category.number} />
      <FormBlock className={css.item}>
        <div className={css.leftSide}>
          <div className={css.color} style={{ backgroundColor: color }}>
            <div className={css.badge}>{category.count}</div>
          </div>
          <div className={css.title}>{category.title}</div>
          <div className={css.count}>
            <p>Таблица Размеров</p>
            {(!category.type || +category.type === 0) && "Нет"}
            {+category.type === 1 && "Стандарт"}
            {+category.type === 2 && "Собственная"}
          </div>
          <div className={css.date}>
            <p>Дата регистрации</p>
            {!!date && date}
          </div>
        </div>

        <div className={css.tools}>
          {/* <button className={css.editBtn} onClick={handleOpenEditModal}>
            <PenIcon />
          </button>
          <button className={css.trashBtn} onClick={handleOpenDeleteModal}>
            <TrashIcon />
          </button>
					 */}
          <MenuContainer last={last} first={first} category={category} />
        </div>
      </FormBlock>
      {!!last && (
        <div className={css.phantom} data-position={category.number + 1} />
      )}
    </div>
  );
};

export default ListItem;
