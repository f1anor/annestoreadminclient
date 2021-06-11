import DropdownMenuContainer from "Common/DropdownMenu/DropdownMenuContainer";
import React from "react";
import css from "./WidgetBlock.module.css";
import { ReactComponent as DotsButton } from "assets/svg/three-dots-vertical.svg";
import DropdownMenuButton from "Common/DropdownMenuButton/DropdownMenuButton";

const WidgetBlock = ({ icon, title, children }) => {
  return (
    <div className={css.wrapper}>
      {!!title && (
        <h6 className={css.title}>
          {icon}
          {title}
          <DropdownMenuContainer
            className={css.menu}
            button={<DotsButton className={css.button} />}
          >
            <ul>
              <li>
                <DropdownMenuButton>Показать</DropdownMenuButton>
              </li>
            </ul>
          </DropdownMenuContainer>
        </h6>
      )}
      {children}
    </div>
  );
};
export default WidgetBlock;
