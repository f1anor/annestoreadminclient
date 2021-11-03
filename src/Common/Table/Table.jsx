import React from "react";
import css from "./Table.module.css";

const Table = ({ children, nopadding = false, ...props }) => {
  return (
    <table className={[css.table, nopadding ? css.nopadding : ""].join(" ")}>
      {children}
    </table>
  );
};
export default Table;
