import React from "react";
import ToastItemContainer from "./ToastItem/ToastItemContainer";
import css from "./Toasts.module.css";

const Toasts = ({ messages, removeToastMessage }) => {
  console.log(messages);
  return (
    <div className={css.wrapper}>
      {messages.map((mess) => (
        <ToastItemContainer key={mess.id} message={mess} />
      ))}
    </div>
  );
};

export default Toasts;
