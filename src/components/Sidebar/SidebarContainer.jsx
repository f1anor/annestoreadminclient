import { setSidebarType } from "actions/app-actions";
import React from "react";
import { useDispatch } from "react-redux";
import Sidebar from "./Sidebar";

const SidebarContainer = ({ sidebarType }) => {
  const dispatch = useDispatch();

  const handleToggleSidebar = () => {
    dispatch(setSidebarType(!sidebarType ? 1 : 0));
  };

  return (
    <Sidebar
      sidebarType={sidebarType}
      handleToggleSidebar={handleToggleSidebar}
    />
  );
};

export default SidebarContainer;
