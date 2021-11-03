import React from "react";
import css from "./Avatar.module.css";
import { ReactComponent as UserIcon } from "assets/svg/user.svg";

const Avatar = ({ ...props }) => {
  return (
    <div className={css.wrapper}>
      <UserIcon className={css.icon} />
    </div>
  );
};
export default Avatar;
