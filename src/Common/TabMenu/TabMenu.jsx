import React from "react";
import css from "./TabMenu.module.css";
import "./TabMenu.css";

const TabMenu = ({ children, className = "" }) => {
  return <ul className={[css.wrapper, className].join(" ")}>{children}</ul>;
};

export default TabMenu;
