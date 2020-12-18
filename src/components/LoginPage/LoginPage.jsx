import React from "react";
import css from "./LoginPage.module.css";

import LoginFormContainer from "./LoginForm/LoginFormContainer";

const LoginPage = () => {
  return (
    <div className={css.pageWrapper}>
      <div className={css.wrapper}>
        <div className={css.titleWrapper}>
          <div className={css.title}>Вход</div>
          <div className={css.titleArrow} />
        </div>
        <LoginFormContainer />
      </div>
    </div>
  );
};

export default LoginPage;
