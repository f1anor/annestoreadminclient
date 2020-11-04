import React from "react";
import { Link } from "react-router-dom";
import css from "./TableTitle.module.css";

const TableTitle = ({ sort, url, content, disabled }) => {
  return (
    <th
      className={[
        url === sort.up ? css.up : " ",
        url === sort.down ? css.down : " ",
      ].join(" ")}
    >
      <Link
        className={disabled ? css.disabledLink : ""}
        to={url === sort.down ? sort.up : sort.down}
      >
        {content}
      </Link>
    </th>
  );
};

export default TableTitle;
