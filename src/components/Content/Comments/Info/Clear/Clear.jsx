import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import css from "./Clear.module.css";
import Button from "Common/Button/Button";

const Clear = ({ link }) => {
  return (
    <div className={css.wrapper}>
      <Link to={link}>
        <Button secondary="true">Очистить</Button>
      </Link>
    </div>
  );
};

export default Clear;
