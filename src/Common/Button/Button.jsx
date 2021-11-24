import InputAnimProvider from "Common/InputAnimProvider/InputAnimProvider";
import React from "react";
import css from "./Button.module.css";

const ModalButton = ({
  secondary, // Серая не основная
  clear, // Прозрачная
  destructive, // Ярко красная
  extra, // Темно серое
  mini, // Все то же что и большая только маленькая
  modal, // Ширина 48%
  anim,
  disabled,
  className,
  children,
  ...props
}) => {
  const black = clear || extra || secondary;
  return (
    <button
      disabled={disabled}
      className={[
        css.button,
        className,
        secondary ? css.secondary : " ",
        clear ? css.clear : " ",
        extra ? css.extra : " ",
        destructive ? css.destructive : " ",
        mini ? css.mini : "",
        modal ? css.modal : "",
      ].join(" ")}
      {...props}
    >
      <InputAnimProvider anim={anim} color={!!black ? "#333" : "#fff"}>
        {children}
      </InputAnimProvider>
    </button>
  );
};
export default ModalButton;
