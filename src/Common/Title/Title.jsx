import React from "react";
import { Spinner } from "react-bootstrap";
import css from "./Title.module.css";

const Title = ({ children, anim }) => {
  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>
        {children}{" "}
        {!!anim && (
          <Spinner
            animation="grow"
            size="sm"
            variant="primary"
            className={css.spinner}
          />
        )}
      </h2>
    </div>
  );
};

export default Title;
