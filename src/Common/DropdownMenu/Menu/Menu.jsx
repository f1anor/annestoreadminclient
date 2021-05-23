import React, { forwardRef } from "react";
import css from "./Menu.module.css";

const Menu = ({ posx, posy, children, icons }, ref) => {
  return (
    <div
      style={{
        left: posx + "px",
        top: posy + "px",
        visibility: !!posx && !!posy ? "visible" : "hidden",
      }}
      className={[css.menu, icons ? css.withIcons : ""].join(" ")}
      ref={ref}
    >
      {children}
    </div>
  );
};
export default forwardRef(Menu);
