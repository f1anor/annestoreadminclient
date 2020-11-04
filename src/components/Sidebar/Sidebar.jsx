import React from "react";
import { Nav } from "react-bootstrap";

import css from "./Sidebar.module.css";
import SidebarMenu from "./SidebarMenu/SidebarMenu";

const Sidebar = () => {
  return (
    <Nav className={css.wrapper}>
      <SidebarMenu />
    </Nav>
  );
};

export default Sidebar;
