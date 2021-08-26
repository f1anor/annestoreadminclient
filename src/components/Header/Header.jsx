import React from "react";

import css from "./Header.module.css";

const Header = ({ signOut, ava, name }) => {
  return (
    <div className={css.wrapper}>
      <div className={css.logo}></div>
      <div className={css.mainSide}>
        <div className={css.controls}>
          <div className={css.btnWrapper}>
            {/* <Button size="sm" onClick={signOut}>
              Выйти из системы
            </Button> */}
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
