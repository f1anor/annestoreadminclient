import WidgetBlock from "Common/WidgetBlock/WidgetBlock";
import React from "react";
import css from "./TotralUsers.module.css";
import { ReactComponent as UsersIcon } from "assets/svg/people.svg";

const TotralUsers = ({ ...props }) => {
  return (
    <WidgetBlock icon={<UsersIcon className={css.icon} />} title="Пользователи">
      <div className={css.count}>4200</div>
      <div className={css.footer}>
        <span>+0.4%</span> За неделю
      </div>
    </WidgetBlock>
  );
};
export default TotralUsers;
