import React from "react";
import css from "./RegStage.module.css";

const RegStage = ({ stage, ...props }) => {
  return (
    <div className={css.wrapper}>
      <div className={css.inner}>
        <div className={[css.round, stage >= 0 ? css.active : " "].join(" ")}>
          1
        </div>
        <div className={[css.round, stage >= 1 ? css.active : " "].join(" ")}>
          2
        </div>
        <div className={[css.round, stage >= 2 ? css.active : " "].join(" ")}>
          3
        </div>
        <div className={[css.round, stage >= 3 ? css.active : " "].join(" ")}>
          4
        </div>
      </div>
    </div>
  );
};
export default RegStage;
