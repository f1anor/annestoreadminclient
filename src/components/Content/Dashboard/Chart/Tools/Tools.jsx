import DropdownMenuContainer from "Common/DropdownMenu/DropdownMenuContainer";
import DropdownMenuButton from "Common/DropdownMenuButton/DropdownMenuButton";
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
              {/* <DropdownMenuButton> */}
              <Link to={param.link}>{param.name}</Link>
              {/* </DropdownMenuButton> */}
            </li>
          ))}
        </ul>
      </DropdownMenuContainer>
    </div>
  );
};
export default Tools;
