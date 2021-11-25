import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as SidebarIcon } from "assets/svg/layout-sidebar.svg";
import css from "./Sidebar.module.css";
import SidebarMenu from "./SidebarMenu/SidebarMenu";
import Button from "Common/Button/Button";
import { ReactComponent as MainIcon } from "assets/svg/bar-chart-fill.svg";

const Sidebar = ({ sidebarType, handleToggleSidebar }) => {
  return (
    <div className={[css.wrapper, sidebarType === 1 ? css.mini : ""].join(" ")}>
      <Link className={css.link} to="/">
        <div className={css.logo}>
          {+sidebarType !== 1 ? (
            <>
              Admin<span>.</span>
            </>
          ) : (
            ""
          )}
          <MainIcon className={css.mainIcon} />{" "}
        </div>
      </Link>

      <SidebarMenu sidebarType={sidebarType} />
      <Button
        clear={true}
        className={css.sidebarBtn}
        onClick={handleToggleSidebar}
      >
        <SidebarIcon className={css.sidebarIcon} />
      </Button>
    </div>
  );
};

export default Sidebar;
