import React from "react";
import { Button } from "react-bootstrap";
import css from "./AddButtons.module.css";

const AddButtons = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.left}>
        <Button size="sm" type="submit" variant="">
          Очистить
        </Button>
      </div>
      <div className={css.right}>
        <Button size="sm" type="submit" variant="" className="mr-3">
          Предварительный просмотр
        </Button>
        <Button size="sm" type="submit">
          Добавить
        </Button>
      </div>
    </div>
  );
};

export default AddButtons;
