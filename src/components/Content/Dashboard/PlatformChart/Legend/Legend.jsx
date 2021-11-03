import React from "react";
import css from "./Legend.module.css";

const Legend = ({ data, COLORS, ...props }) => {
  return (
    <div className={css.wrapper}>
      <ul>
        {data.map((entry, index) => (
          <li key={index} className={css.listItem}>
            <div
              className={css.color}
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            />
            <div className={css.content}>
              <div className={css.name}>{entry.name}</div>
              <div className={css.value}>{entry.value}%</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Legend;
