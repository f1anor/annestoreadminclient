import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { Link } from "react-router-dom";

const Status = ({ pathObj, isDisabled }) => {
  return (
    <DropdownButton
      disabled={isDisabled}
      title={`Доступ: ${pathObj.current || "Все"}`}
      size="sm"
    >
      <Link to={pathObj.pathArr[0].url}>
        <Dropdown.Item as="div" eventKey="1">
          {pathObj.pathArr[0].title}
        </Dropdown.Item>
      </Link>
      <Link to={pathObj.pathArr[1].url}>
        <Dropdown.Item as="div" eventKey="1">
          {pathObj.pathArr[1].title}
        </Dropdown.Item>
      </Link>
      <Dropdown.Divider />
      <Link to={pathObj.clear}>
        <Dropdown.Item as="div" eventKey="1">
          Все
        </Dropdown.Item>
      </Link>
    </DropdownButton>
  );
};

export default Status;
