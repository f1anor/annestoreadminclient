import DropdownMenuContainer from "Common/DropdownMenu/DropdownMenuContainer";
import DropdownMenuButton from "Common/DropdownMenuButton/DropdownMenuButton";
import React from "react";
import css from "./Status.module.css";
import StatusButton from "./StatusButton/StatusButton";

const Status = ({ status = {}, allStatus = [], handleChangeStatus }) => {
  return (
    <div className={css.wrapper}>
      <DropdownMenuContainer
        icons={true}
        button={
          <StatusButton value={status.value}>{status.title}</StatusButton>
        }
      >
        <ul>
          {allStatus.map((status) => (
            <li key={status.value}>
              <DropdownMenuButton>
                <div
                  className={css.icon}
                  style={{ backgroundColor: status.color }}
                />
                {status.title}
              </DropdownMenuButton>
            </li>
          ))}
        </ul>
      </DropdownMenuContainer>
    </div>
  );
};
export default Status;
