import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

const Access = ({ status, root }) => {
  return (
    <DropdownButton disabled={!root} title={!!status ? "Да" : "Нет"} size="sm">
      <Dropdown.Item as="div" eventKey="1">
        Да
      </Dropdown.Item>
      <Dropdown.Item as="div" eventKey="1">
        Нет
      </Dropdown.Item>
    </DropdownButton>
  );
};

export default Access;
