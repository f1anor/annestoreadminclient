import React from "react";
import css from "./New.module.css";
import CheckboxInput from "Common/CheckboxInput/CheckboxInput";
import Input from "Common/Input/Input";
import FormBlockTitle from "Common/FormBlockTitle/FormBlockTitle";
import StarInput from "Common/StarInput/StarInput";

const New = ({
  handleCheck,
  handleChange,
  checkValue,
  areaValue,
  handleSend,
  handleSetStars,
  starsValue,
  setFirstName,
  firstName,
  isDisabled,
}) => {
  return (
    <div className={css.wrapper}>
      <FormBlockTitle>Добавить комментарий</FormBlockTitle>
      {!checkValue && (
        <>
          <StarInput
            value={starsValue}
            onClick={handleSetStars}
            className={css.stars}
          />
          <div className={css.personData}>
            <label className={css.inputLabel}>
              Имя
              <Input
                className={css.input}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>
          </div>
        </>
      )}
      <label className={css.areaLabel}>
        {!checkValue && <>Комментарий</>}
        <textarea
          className={css.area}
          value={areaValue}
          onChange={handleChange}
        />
      </label>
      <div className={css.tools}>
        <label className={css.checkLabel}>
          <CheckboxInput
            value={checkValue}
            className={css.check}
            onChange={handleCheck}
          />
          Как администратор
        </label>
        <button className={css.btn} disabled={isDisabled} onClick={handleSend}>
          Добавить
        </button>
      </div>
    </div>
  );
};

export default New;
