import React from "react";
import { Spinner } from "react-bootstrap";

const Preloader = () => {
  return (
    <div className="mr-auto w-100 h-100">
      <Spinner
        animation="grow"
        size="large"
        variant="primary"
        // className={css.spinner}
      />
    </div>
  );
};

export default Preloader;
