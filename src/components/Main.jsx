import React from "react";
import Content from "./Content/Content";
import HeaderContainer from "./Header/HeaderContainer";
import css from "./Main.module.css";
import SidebarContainer from "./Sidebar/SidebarContainer";
import ToastsContainer from "./Toasts/ToastsContainer";
import ModalImg from "Common/ModalImg/ModalImg";

const Main = ({ setImg, img }) => {
  return (
    <div className={css.wrapper}>
      <HeaderContainer />
      <div className={css.main}>
        <SidebarContainer />
        <div className={css.content}>
          <Content />
        </div>
      </div>
      <ToastsContainer />
      <ModalImg show={!!img} img={img} onHide={() => setImg(null)} />
    </div>
  );
};

export default Main;
