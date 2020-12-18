import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import StatusContainer from "./Status/StatusContainer";

export const Params = ({ root, isDisabled }) => {
  return (
    <div className="d-flex">
      <Link to="/users/admins?page=1" className="mr-2">
        <Button size="sm" disabled={isDisabled}>
          Сбросить
        </Button>
      </Link>
      <StatusContainer isDisabled={isDisabled} />
      <Button
        variant="danger"
        size="sm"
        className="ml-2"
        disabled={!root || isDisabled}
      >
        Выйти у всех адмнинистраторов
      </Button>
    </div>
  );
};

export default Params;
