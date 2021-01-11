import React from "react";
import css from "./StructureElement.module.css";
import Dropdown from "Common/Dropdown/Dropdown";
import { ReactComponent as TrashIcon } from "assets/svg/trash.svg";

const StructureElement = ({
  element,
  handleChangeName,
  handleChangeValue,
  handleRemove,
  total,
}) => {
  return (
    <div className={css.wrapper}>
      {element.id !== 0 && (
        <button className={css.btn} onClick={handleRemove}>
          <TrashIcon />
        </button>
      )}
      <input
        type="text"
        value={element.name}
        onChange={handleChangeName}
        className={css.input}
      />
      <Dropdown
        onChange={handleChangeValue}
        value={+element.value}
        list={[
          { title: "Нет", value: "" },
          total <= 90 ? { title: "10%", value: 10 } : null,
          total <= 80 ? { title: "20%", value: 20 } : null,
          total <= 70 ? { title: "30%", value: 30 } : null,
          total <= 60 ? { title: "40%", value: 40 } : null,
          total <= 50 ? { title: "50%", value: 50 } : null,
          total <= 40 ? { title: "60%", value: 60 } : null,
          total <= 30 ? { title: "70%", value: 70 } : null,
          total <= 20 ? { title: "80%", value: 80 } : null,
          total <= 10 ? { title: "90%", value: 90 } : null,
          total === 0 ? { title: "100%", value: 100 } : null,
        ]}
        className={css.dropdown}
      />
    </div>
  );
};

export default StructureElement;
