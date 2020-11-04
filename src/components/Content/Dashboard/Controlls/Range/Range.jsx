import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { Link } from "react-router-dom";

const Range = ({ paramsArr, currentRange }) => {
  return (
    <DropdownButton
      className="ml-2 mr-2"
      id="dropdown-basic-button"
      title={`Период за: ${currentRange || "Неделя"}`}
      variant="outline-primary"
    >
      {paramsArr.map((param) => (
        <Dropdown.Item as="div" key={param.value}>
          <Link to={param.link}>{param.name}</Link>
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
};

export default Range;
