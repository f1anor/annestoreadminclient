import React from "react";
import { ReactComponent as DotsIcon } from "assets/svg/three-dots.svg";
import { ReactComponent as ArrowIcon } from "assets/svg/arrow-left-circle.svg";
import { ReactComponent as TrashIcon } from "assets/svg/trash.svg";
import css from "./Menu.module.css";
import DropdownMenuContainer from "Common/DropdownMenu/DropdownMenuContainer";
import DropdownMenuButton from "Common/DropdownMenuButton/DropdownMenuButton";

const Menu = ({ id, handleRestore, handleDelete, handleClose, ...props }) => {
  return (
    <div className={css.wrapper}>
      <DropdownMenuContainer
        icons={true}
        button={<DotsIcon className={css.dots} />}
      >
        <ul>
          <li>
            <DropdownMenuButton className={css.restore} onClick={handleRestore}>
              <ArrowIcon className={css.menuIcon} /> Восстановить
            </DropdownMenuButton>
          </li>
          <li>
            <DropdownMenuButton className={css.delete} onClick={handleDelete}>
              <TrashIcon className={css.menuIcon} /> Удалить
            </DropdownMenuButton>
          </li>
        </ul>
      </DropdownMenuContainer>
    </div>
  );
};
export default Menu;
