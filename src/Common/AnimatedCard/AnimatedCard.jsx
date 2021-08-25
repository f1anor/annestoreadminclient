import React from "react";
import css from "./AnimatedCard.module.css";

const AnimatedCard = ({ children, className = "" }) => {
  return <div className={[css.wrapper, className].join(" ")}>{children}</div>;
};
export default AnimatedCard;
