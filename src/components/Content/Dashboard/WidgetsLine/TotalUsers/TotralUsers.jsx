import WidgetBlock from "Common/WidgetBlock/WidgetBlock";
import React from "react";
import css from "./TotralUsers.module.css";
import { ReactComponent as UsersIcon } from "assets/svg/people.svg";

const TotralUsers = ({ users }) => {
  return (
    <WidgetBlock icon={<UsersIcon className={css.icon} />} title="Пользователи">
      <div className={css.count}>{users.all}</div>
      <div className={css.footer}>
        <span>+{users.last}%</span> За неделю
      </div>
    </WidgetBlock>
  );
};
export default TotralUsers;
