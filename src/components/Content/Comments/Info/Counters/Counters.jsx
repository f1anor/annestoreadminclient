import React from "react";
import css from "./Counters.module.css";
import { ReactComponent as ClockIcon } from "assets/svg/clock.svg";
import { ReactComponent as ChatIcon } from "assets/svg/chat-dots.svg";

const Counters = ({ metaActive, metaWait }) => {
  return (
    <div className={css.wrapper}>
      <div className={css.modered}>
        <ClockIcon />
        <p className={css.count}>{metaWait || 0}</p>
        <p className={css.description}>Ожидают</p>
      </div>
      <div className={css.published}>
        <ChatIcon />
        <p className={css.count}>{metaActive || 0}</p>
        <p className={css.description}>Активно</p>
      </div>
    </div>
  );
};

export default Counters;
