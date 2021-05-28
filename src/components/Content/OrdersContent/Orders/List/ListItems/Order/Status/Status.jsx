import DropdownMenuContainer from "Common/DropdownMenu/DropdownMenuContainer";
import DropdownMenuButton from "Common/DropdownMenuButton/DropdownMenuButton";
import React from "react";
import css from "./Status.module.css";
import StatusButton from "./StatusButton/StatusButton";

const Status = ({
  status = {},
  allStatus = [],
  handleChangeStatus,
  isDisabled,
}) => {
  return (
    <div className={css.wrapper}>
      <DropdownMenuContainer
        icons={true}
        disabled={isDisabled}
        button={
          <StatusButton value={status.value} disabled={isDisabled}>
            {status.title}
          </StatusButton>
        }
      >
        <ul>
          {allStatus.map((status) => (
            <li key={status.value}>
              <DropdownMenuButton
                onClick={() => handleChangeStatus(status.value)}
              >
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
