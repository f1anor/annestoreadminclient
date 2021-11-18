import React from "react";
import { useDispatch } from "react-redux";
import { change } from "redux-form";
import BadgesList from "./BadgesList";

const BadgesListContainer = ({ value, form, name, ...props }) => {
  const dispatch = useDispatch();
  const handleMoveSuccess = (start, end) => {
    // Вычисляем индек объекта на который приземляемся
    const endIndex = value.findIndex((item) => item === end);

    // Удаляем из массива стартовый объект
    const newValue = value.filter((item) => item !== start);

    // Вставляем на новое место стартовый объект
    newValue.splice(endIndex, 0, start);

    dispatch(change(form, name, [...newValue]));
  };

  const handleDelete = (val) => {
    const newValue = value.filter((item, index) => index !== val);
    dispatch(change(form, name, [...newValue]));
  };
  return (
    <BadgesList
      value={value}
      handleMoveSuccess={handleMoveSuccess}
      handleDelete={handleDelete}
    />
  );
};
export default BadgesListContainer;
