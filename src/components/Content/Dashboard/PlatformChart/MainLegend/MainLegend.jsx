import React from "react";
import css from "./MainLegend.module.css";

const MainLegend = ({ data, ...props }) => {
  return (
    <div className={css.wrapper}>
      <ul>
        {data.map((entry, index) => (
          <li key={index}></li>
        ))}
      </ul>
    </div>
  );
};
export default MainLegend;
