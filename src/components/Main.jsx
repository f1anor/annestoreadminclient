import React from "react";
import css from "./Main.module.css";
import SidebarContainer from "./Sidebar/SidebarContainer";
import ToastsContainer from "./Toasts/ToastsContainer";
import ContentContaner from "./Content/ContentContaner";
import ModalImgConitainer from "Common/ModalImg/ModalImgConitainer";
import HeaderContainer from "./Header/HeaderContainer";

const Main = ({ sidebarType }) => {
  return (
    <div className={css.wrapper}>
      <div className={css.main}>
        <div className={css.sidebar}>
          <SidebarContainer sidebarType={sidebarType} />
        </div>
        <div
          className={[css.content, sidebarType === 1 ? css.mini : ""].join(" ")}
        >
          <HeaderContainer />
          <ContentContaner />
        </div>
      </div>
      <ToastsContainer />
      {/* Модальные окна */}
      <ModalImgConitainer />
    </div>
  );
};

export default Main;
