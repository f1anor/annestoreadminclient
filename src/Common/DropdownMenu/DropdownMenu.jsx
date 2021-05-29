import React, { forwardRef } from "react";

import css from "./DropdownMenu.module.css";
import MenuContainer from "./Menu/MenuContainer";

const DropdownMenu = (
  {
    button,
    open,
    handleToggle,
    title,
    menu,
    className = "",
    disabled,
    noScroll,
    ...props
  },
  ref
) => {
  return (
    <div className={[css.wrapper, className].join(" ")}>
      <button
        className={css.title}
        onClick={handleToggle}
        ref={ref}
        type="button"
        disabled={disabled}
      >
        {button}
      </button>
      {!!open && (
        <MenuContainer
          menu={menu}
          title={title}
          noScroll={noScroll}
          {...props}
        />
      )}
    </div>
  );
};

export default forwardRef(DropdownMenu);
