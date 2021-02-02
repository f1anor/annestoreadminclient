import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import css from "./Categories.module.css";

const Categories = ({
  cat,
  isFetchingCat,
  currentCat,
  clearCat,
  isProdDisabled,
}) => {
  return (
    <div className={css.wrapper}>
      Фильтровать:
      <DropdownButton
        disabled={!!isFetchingCat || isProdDisabled}
        title={currentCat || "Все"}
        className={css.catBtn}
        variant=""
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
    </div>
  );
};

export default Categories;
