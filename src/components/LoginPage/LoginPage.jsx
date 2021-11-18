import React from "react";
import css from "./LoginPage.module.css";

import LoginFormContainer from "./LoginForm/LoginFormContainer";
import AnimatedCard from "Common/AnimatedCard/AnimatedCard";
import Title from "Common/Title/Title";

// TODO: Доделать в целом окно входа. А именно - общую ошибку переделать
const LoginPage = () => {
  return (
    <div className={css.pageWrapper}>
      <AnimatedCard className={css.wrapper}>
        <div className={css.img}></div>
        <div className={css.content}>
          <Title className={css.title}>Вход</Title>
          <LoginFormContainer />
        </div>
      </AnimatedCard>
    </div>
  );
};

export default LoginPage;
