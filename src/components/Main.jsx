import React from "react";
import Content from "./Content/Content";
import HeaderContainer from "./Header/HeaderContainer";
import css from "./Main.module.css";
import SidebarContainer from "./Sidebar/SidebarContainer";

const Main = () => {
  return (
    <div className={css.wrapper}>
      <HeaderContainer />
      <div className={css.main}>
        <SidebarContainer />
        <div className={css.content}>
          <Content />
        </div>
      </div>
    </div>
  );
};

export default Main;
