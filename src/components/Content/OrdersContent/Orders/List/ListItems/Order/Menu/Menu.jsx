import DropdownMenuContainer from "Common/DropdownMenu/DropdownMenuContainer";
import React, { useEffect } from "react";
import css from "./Menu.module.css";
import { ReactComponent as DotsIcon } from "assets/svg/three-dots.svg";
import { ReactComponent as ViewIcon } from "assets/svg/credit-card-2-front.svg";
import { ReactComponent as PenIcon } from "assets/svg/pen.svg";
import { ReactComponent as TrashIcon } from "assets/svg/trash.svg";
import { ReactComponent as PrinterIcon } from "assets/svg/printer.svg";
import DropdownMenuButton from "Common/DropdownMenuButton/DropdownMenuButton";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Menu = ({
  handleSetDeleteModal,
  handleSetPreviewModal,
  handleSetPrint,
  id,
  isDisabled,
}) => {
  return (
    <div className={css.wrapper}>
      <DropdownMenuContainer
        icons={true}
        disabled={isDisabled}
        button={<DotsIcon className={css.dots} />}
      >
        <ul>
          <li>
            <DropdownMenuButton onClick={handleSetPreviewModal}>
              <ViewIcon className={css.menuIcon} /> Посмотреть
            </DropdownMenuButton>
          </li>
          <li>
            <DropdownMenuButton onClick={handleSetPrint}>
              <PrinterIcon className={css.menuIcon} /> Напечатать
            </DropdownMenuButton>
          </li>
          <li>
            <Link to={`/orders/editorder/${id}`} className={css.menuLink}>
              <PenIcon className={css.penIcon} />
              Редактировать
            </Link>
          </li>
          <li>
            <DropdownMenuButton
              className={css.delete}
              onClick={handleSetDeleteModal}
            >
              <TrashIcon className={css.menuIcon} />
              Удалить
            </DropdownMenuButton>
          </li>
        </ul>
      </DropdownMenuContainer>
    </div>
  );
};
export default Menu;
