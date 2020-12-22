import React from "react";
import { Button } from "react-bootstrap";

import css from "./Header.module.css";
import Logo from "./Logo/Logo";

const Header = ({ signOut, ava, name }) => {
  return (
    <div className={css.wrapper}>
      <div className={css.logo}>
        <Logo />
      </div>
      <div className={css.mainSide}>
        <div className={css.controls}>
          <div className={css.btnWrapper}>
            <Button size="sm" onClick={signOut}>
              Выйти из системы
            </Button>
          </div>
          <div className={css.avatar}>
            <img src={`${process.env.REACT_APP_SERVER_ASSETS}${ava}`} alt="" />
          </div>
          <span>{name}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
