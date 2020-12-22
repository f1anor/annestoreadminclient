import React from "react";
import css from "./TabMenu.module.css";
import "./TabMenu.css";

const TabMenu = ({ children }) => {
  return <ul className={css.wrapper}>{children}</ul>;
};

export default TabMenu;
