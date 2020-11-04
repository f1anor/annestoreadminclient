import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const Categories = ({
  cat,
  isFetchingCat,
  currentCat,
  clearCat,
  isProdDisabled,
}) => {
  return (
    <DropdownButton
      disabled={!!isFetchingCat || isProdDisabled}
      title={`Категория: ${currentCat || "все"}`}
      className="ml-2"
      size="sm"
    >
      {cat.map((item) => (
        <Dropdown.Item as="div" key={item._id} eventKey="1">
          <Link to={item.link}>{item.title}</Link>
        </Dropdown.Item>
      ))}
      <Dropdown.Divider />
      <Dropdown.Item as="div" eventKey="1">
        <Link to={clearCat}>Все</Link>
      </Dropdown.Item>
    </DropdownButton>
  );
};

export default Categories;
