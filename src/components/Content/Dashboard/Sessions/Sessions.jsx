import AnimatedCard from "Common/AnimatedCard/AnimatedCard";
import CardTitle from "Common/CardTitle/CardTitle";
import React from "react";
import css from "./Sessions.module.css";

const Sessions = ({ sessions, totalCount }) => {
  return (
    <AnimatedCard className={css.wrapper}>
      <CardTitle>Активность</CardTitle>
    </AnimatedCard>
  );
};
export default Sessions;
