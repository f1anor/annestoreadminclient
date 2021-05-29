import DropdownMenuContainer from "Common/DropdownMenu/DropdownMenuContainer";
import React from "react";
import css from "./NoteMenu.module.css";
import { ReactComponent as DotsIcon } from "assets/svg/three-dots.svg";
import DropdownMenuButton from "Common/DropdownMenuButton/DropdownMenuButton";

const NoteMenu = ({ handleRemove, time }) => {
  return (
    <DropdownMenuContainer
      noScroll={true}
      button={
        <div>
          <DotsIcon className={css.icon} />
        </div>
      }
    >
      <ul>
        <li>
          <DropdownMenuButton onClick={() => handleRemove(time)}>
            Удалить
          </DropdownMenuButton>
        </li>
      </ul>
    </DropdownMenuContainer>
  );
};
export default NoteMenu;
