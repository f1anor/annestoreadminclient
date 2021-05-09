import React from "react";
import css from "./Empty.module.css";
import { ReactComponent as CommentIcon } from "assets/svg/chat-square-dots-fill.svg";

const Empty = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.placeholder}>
        <div className={css.iconWrapper}>
          <CommentIcon className={css.icon} />
        </div>
        <h3 className={css.title}>Комментарии отсутствуют</h3>
        <span className={css.content}>Ваш комментарий будет первым</span>
      </div>
    </div>
  );
};

export default Empty;
