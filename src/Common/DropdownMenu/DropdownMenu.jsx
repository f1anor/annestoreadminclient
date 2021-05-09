import React from "react";
import css from "./DropdownMenu.module.css";

const DropdownMenu = ({
  children,
  button,
  open,
  handleSetOpen,
  title,
  menu,
  direction = "center",
}) => {
  return (
    <div className={css.wrapper}>
      <button
        className={css.title}
        onClick={handleSetOpen}
        ref={title}
        type="button"
      >
        {button}
      </button>
      <div
        className={[css.menu, !!open ? css.open : "", direction].join(" ")}
        ref={menu}
      >
        {children}
      </div>
    </div>
  );
};

export default DropdownMenu;
