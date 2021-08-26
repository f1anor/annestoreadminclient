import DropdownMenuContainer from "Common/DropdownMenu/DropdownMenuContainer";
import React from "react";
import { Link } from "react-router-dom";
import CallendarContainer from "./Callendar/CallendarContainer";
import css from "./Tools.module.css";

const Tools = ({ currentRange, paramsArr }) => {
  return (
    <div className={css.wrapper}>
      <CallendarContainer />
      <DropdownMenuContainer
        button={<div className={css.button}>{currentRange || "Неделя"}</div>}
      >
        <ul>
          {paramsArr.map((param) => (
            <li key={param.value}>
              <Link to={param.link}>{param.name}</Link>
            </li>
          ))}
        </ul>
      </DropdownMenuContainer>
    </div>
  );
};
export default Tools;
