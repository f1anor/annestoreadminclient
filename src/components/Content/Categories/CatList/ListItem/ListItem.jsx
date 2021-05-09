import React from "react";
import FormBlock from "Common/FormBlock/FormBlock";
import DropdownMenuContainer from "Common/DropdownMenu/DropdownMenuContainer";
import css from "./ListItem.module.css";
import { ReactComponent as PenIcon } from "assets/svg/pen.svg";
import { ReactComponent as TrashIcon } from "assets/svg/trash.svg";
import { ReactComponent as DotsIcon } from "assets/svg/three-dots.svg";

const ListItem = ({
  category,
  handleMoveUp,
  handleMoveDown,
  color,
  first,
  last,
  handleOpenEditModal,
  handleOpenDeleteModal,
}) => {
  const date = !!category.date
    ? new Date(+category.date).toLocaleString("ru", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <FormBlock
      style={{ backgroundColor: color !== "#e9e9ee" ? color : "#fff" }}
      className={[css.item, color !== "#e9e9ee" ? css.colorType : ""].join(" ")}
    >
      <div className={css.leftSide}>
        <div className={css.color}>
          <div className={css.badge}>{category.number}</div>
        </div>
        <div className={css.title}>{category.title}</div>
        <div className={css.count}>
          <p>Всего продуктов</p>
          {category.count}
        </div>
        <div className={css.date}>
          <p>Дата регистрации</p>
          {!!date && date}
        </div>
      </div>

      <div className={css.tools}>
        <button className={css.editBtn} onClick={handleOpenEditModal}>
          <PenIcon />
        </button>
        <button className={css.trashBtn} onClick={handleOpenDeleteModal}>
          <TrashIcon />
        </button>
        <DropdownMenuContainer button={<DotsIcon className={css.dotsBtn} />}>
          <ul>
            {!!first && !!last && (
              <li>
                <button className={[css.menuBtn, css.empty].join(" ")}>
                  (Действия отсутствуют)
                </button>
              </li>
            )}
            {!first && (
              <li>
                <button className={css.menuBtn} onClick={handleMoveUp}>
                  Поднять выше
                </button>
              </li>
            )}
            {!last && (
              <li>
                <button className={css.menuBtn} onClick={handleMoveDown}>
                  Опустить ниже
                </button>
              </li>
            )}
          </ul>
        </DropdownMenuContainer>
      </div>
    </FormBlock>
  );
};

export default ListItem;
