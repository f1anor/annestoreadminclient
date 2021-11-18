import ImageLoaderContainer from "Common/ImageLoader/ImageLoaderContainer";
import ModalButton from "Common/ModalButton/ModalButton";
import React from "react";
import { Field, reduxForm } from "redux-form";
import css from "./FourthStageForm.module.css";
import { ReactComponent as UserIcon } from "assets/svg/person-bounding-box.svg";

const FourthStageForm = ({
  handleSubmit,
  handleReturn,
  handlePreloadImage,
  disabled,
  ...props
}) => {
  const Label = ({ children }) => {
    return (
      <label className={css.label}>
        <UserIcon />
        {children}
      </label>
    );
  };

  return (
    <form onSubmit={handleSubmit} className={css.wrapper}>
      <div className={css.inner}>
        <Field
          component={ImageLoaderContainer}
          name="avatarTmp"
          className={css.img}
          preloadImage={handlePreloadImage}
          width={242}
          height={242}
          Label={Label}
        />
      </div>
      <div className={css.btns}>
        <ModalButton disabled={disabled} anim={disabled}>
          Регистрация
        </ModalButton>
        <ModalButton
          secondary={true}
          type="button"
          onClick={handleReturn}
          disabled={disabled}
        >
          Назад
        </ModalButton>
      </div>
    </form>
  );
};
export default reduxForm({ form: "regFourthStageForm" })(FourthStageForm);
