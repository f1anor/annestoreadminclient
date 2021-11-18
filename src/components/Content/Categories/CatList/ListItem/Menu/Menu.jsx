import React from "react";
import css from "./Menu.module.css";
import { ReactComponent as DotsIcon } from "assets/svg/three-dots.svg";
import DropdownMenuContainer from "Common/DropdownMenu/DropdownMenuContainer";
import DropdownMenuButton from "Common/DropdownMenuButton/DropdownMenuButton";
import { ReactComponent as ArrowDownIcon } from "assets/svg/arrow-down-short.svg";
import { ReactComponent as ArrowUpIcon } from "assets/svg/arrow-up-short.svg";
import { ReactComponent as PenIcon } from "assets/svg/pen.svg";
import { ReactComponent as TrashIcon } from "assets/svg/trash.svg";

const Menu = ({
  first,
  last,
  handleMoveUp,
  handleMoveDown,
  handleOpenEditModal,
  handleOpenDeleteModal,
}) => {
  return (
    <DropdownMenuContainer button={<DotsIcon className={css.dotsBtn} />}>
      <ul>
        {!first && (
          <li>
            <DropdownMenuButton onClick={handleMoveUp} className={css.btn}>
              <ArrowUpIcon className={css.menuIcon} /> Поднять выше
            </DropdownMenuButton>
          </li>
        )}
        {!last && (
          <li>
            <DropdownMenuButton onClick={handleMoveDown} className={css.btn}>
              <ArrowDownIcon className={css.menuIcon} /> Опустить ниже
            </DropdownMenuButton>
          </li>
        )}
        <li>
          <DropdownMenuButton onClick={handleOpenEditModal} className={css.btn}>
            <PenIcon className={css.penIcon} /> Редактировать
          </DropdownMenuButton>
        </li>
        <li>
          <DropdownMenuButton
            onClick={handleOpenDeleteModal}
            className={css.btn}
          >
            <TrashIcon className={css.trashIcon} /> Удалить
          </DropdownMenuButton>
        </li>
      </ul>
    </DropdownMenuContainer>
  );
};
export default Menu;
