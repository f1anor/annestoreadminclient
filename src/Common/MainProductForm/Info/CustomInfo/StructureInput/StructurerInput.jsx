import React from "react";
import StructureElementContainer from "./StructureElement/StructureElementContainer";
import css from "./StructureInput.module.css";

const StructureInput = ({ handleAdd, value, form, name }) => {
  return (
    <div>
      <div>
        {value
          .sort((a, b) => a.id - b.id)
          .map((item) => (
            <StructureElementContainer
              key={item.id}
              element={item}
              form={form}
              name={name}
              value={value}
            />
          ))}
      </div>
      <button onClick={handleAdd} className={css.addBtn}>
        Добавить материал
      </button>
    </div>
  );
};

export default StructureInput;
