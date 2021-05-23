import React from "react";
import css from "./Table.module.css";

const Table = ({ children, ...props }) => {
  return <table className={css.table}>{children}</table>;
};
export default Table;
