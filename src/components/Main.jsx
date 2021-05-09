import React from "react";
import HeaderContainer from "./Header/HeaderContainer";
import css from "./Main.module.css";
import SidebarContainer from "./Sidebar/SidebarContainer";
import ToastsContainer from "./Toasts/ToastsContainer";
import ModalImg from "Common/ModalImg/ModalImg";
import ContentContaner from "./Content/ContentContaner";

const Main = ({ setImg, img }) => {
  return (
    <div className={css.wrapper}>
      <HeaderContainer />
      <div className={css.main}>
        <div className={css.sidebar}>
          <SidebarContainer />
        </div>
        <div className={css.content}>
          <ContentContaner />
        </div>
      </div>
      <ToastsContainer />
      <ModalImg show={!!img} img={img} onHide={() => setImg(null)} />
    </div>
  );
};

export default Main;
