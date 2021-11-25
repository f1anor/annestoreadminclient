import React from "react";
import Avatar from "./Avatar/Avatar";
import { ReactComponent as LogoutIcon } from "assets/svg/account-login.svg";

import css from "./Header.module.css";

const Header = ({ display, handleSigneOut, ava, name }) => {
  return (
    <div className={[css.wrapper, !!display ? css.visible : " "].join(" ")}>
      <div className={css.content}>
        <div className={css.name}>{name}</div>
        <Avatar />
        <button className={css.logout} onClick={handleSigneOut}>
          <LogoutIcon />
        </button>
      </div>
    </div>
  );
};

export default Header;
