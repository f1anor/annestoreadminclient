import AnimatedCard from "Common/AnimatedCard/AnimatedCard";
import React from "react";
import { Link } from "react-router-dom";
import FirstStageFormConitanier from "./FirstStageForm/FirstStageFormConitanier";
import FourthStageFormContainer from "./FourthStageForm/FourthStageFormContainer";
import css from "./RegisterPage.module.css";
import RegStage from "./RegStage/RegStage";
import SecondStageFormContainer from "./SecondStageForm/SecondStageFormContainer";
import ThirdStageFormContainer from "./ThirdStageForm/ThirdStageFormContainer";

const RegisterPage = ({ stage, disabled, ...props }) => {
  return (
    <div className={css.pageWrapper}>
      <AnimatedCard className={css.wrapper}>
        <RegStage stage={stage} />
        {+stage === 0 && <FirstStageFormConitanier disabled={disabled} />}
        {+stage === 1 && <SecondStageFormContainer disabled={disabled} />}
        {+stage === 2 && <ThirdStageFormContainer disabled={disabled} />}
        {+stage === 3 && <FourthStageFormContainer disabled={disabled} />}
        <div className={css.backToLogin}>
          Уже есть аккаунт? <Link to="/">Войти</Link>
        </div>
      </AnimatedCard>
    </div>
  );
};

export default RegisterPage;
