import React, { forwardRef } from "react";

import css from "./DropdownMenu.module.css";
import MenuContainer from "./Menu/MenuContainer";

const DropdownMenu = (
  { button, open, handleToggle, title, menu, className = "", ...props },
  ref
) => {
  return (
    <div className={[css.wrapper, className].join(" ")}>
      <button
        className={css.title}
        onClick={handleToggle}
        ref={ref}
        type="button"
      >
        {button}
      </button>
      {!!open && <MenuContainer menu={menu} title={title} {...props} />}
    </div>
  );
};

export default forwardRef(DropdownMenu);
