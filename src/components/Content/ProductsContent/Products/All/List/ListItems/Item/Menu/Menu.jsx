import React from "react";
import { ReactComponent as DotsIcon } from "assets/svg/three-dots.svg";
import { ReactComponent as PenIcon } from "assets/svg/pen.svg";
import { ReactComponent as TrashIcon } from "assets/svg/trash.svg";
import { ReactComponent as OrderIcon } from "assets/svg/clipboard.svg";
import { ReactComponent as CommentsIcon } from "assets/svg/chat-left-text.svg";
import css from "./Menu.module.css";
import DropdownMenuContainer from "Common/DropdownMenu/DropdownMenuContainer";
import { Link } from "react-router-dom";
import DropdownMenuButton from "Common/DropdownMenuButton/DropdownMenuButton";

const Menu = ({ id, handleMoveToArchive, handleClose, handleMakeOrder }) => {
  return (
    <div className={css.wrapper}>
      <DropdownMenuContainer
        icons={true}
        button={<DotsIcon className={css.dots} />}
      >
        <ul>
          <li>
            <Link to={`/products/editproduct/${id}`} className={css.menuLink}>
              <PenIcon className={css.penIcon} />
              Редактировать
            </Link>
          </li>
          <li>
            <Link to={`/comments/${id}?page=1`} className={css.menuLink}>
              <CommentsIcon className={css.penIcon} />
              Комментарии
            </Link>
          </li>
          <li>
            <DropdownMenuButton className={css.btn} onClick={handleMakeOrder}>
              <OrderIcon className={css.menuIcon} />
              Создать заказ
            </DropdownMenuButton>
          </li>
          <li>
            <DropdownMenuButton
              className={css.delete}
              onClick={handleMoveToArchive}
            >
              <TrashIcon className={css.menuIcon} />В Архив
            </DropdownMenuButton>
          </li>
        </ul>
      </DropdownMenuContainer>
    </div>
  );
};
export default Menu;
