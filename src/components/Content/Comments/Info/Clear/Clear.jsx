import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import css from "./Clear.module.css";

const Clear = ({ link }) => {
  return (
    <div className={css.wrapper}>
      <Link to={link}>
        <button>Очистить</button>
      </Link>
    </div>
  );
};

export default Clear;
