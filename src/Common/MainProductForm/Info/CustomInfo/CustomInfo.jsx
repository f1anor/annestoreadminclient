import React from "react";
import { Field } from "redux-form";
import DropdownInputContainer from "../../../DropdownInput/DropdownInputContainer";
import FormBlockTitle from "../../../FormBlockTitle/FormBlockTitle";
import OpenAnim from "../../../OpenAnim/OpenAnim";
import TooltipBtn from "../../../TooltipBtn/TooltipBtn";
import css from "./CustomInfo.module.css";
import StructureInputContainer from "./StructureInput/StructureInputContainer";

const CustomInfo = ({ showAdw, handleSetShowAdw }) => {
  return (
    <>
      <div className={css.br} />
      <FormBlockTitle>
        Дополнительно{" "}
        <button
          type="button"
          className={css.showBtn}
          onClick={handleSetShowAdw}
        >
          {!!showAdw ? "Скрыть" : "Показать"}
        </button>
      </FormBlockTitle>
      <OpenAnim isOpen={!!showAdw} className={css.hidBlock}>
        <div className={css.formDoubleLine}>
          <label className={css.label}>
            Пол
            <Field
              className={css.dropdown}
              name="gender"
              component={DropdownInputContainer}
              list={[
                { title: "Нет", value: null },
                { title: "Мужской", value: "male" },
                { title: "Женский", value: "female" },
              ]}
            />
            <TooltipBtn value="test1" />
          </label>
          <label className={css.label}>
            Цвет
            <Field
              className={css.dropdown}
              name="color"
              component={DropdownInputContainer}
              list={[
                { title: "Нет", value: null },
                { title: "Белый", value: "white" },
                { title: "Серый", value: "gray" },
                { title: "Черный", value: "black" },
                { title: "Пурпурный", value: "purple" },
                { title: "Красный", value: "red" },
                { title: "Коричневый", value: "brown" },
                { title: "Желтый", value: "yellow" },
                { title: "Зеленый", value: "green" },
                { title: "Голубой", value: "aqua" },
                { title: "Синий", value: "blue" },
              ]}
            />
            <TooltipBtn value="Подсказка2" />
          </label>
        </div>
        <div className={css.formDoubleLine}>
          <label className={css.label}>
            Состав
            <Field name="structure" component={StructureInputContainer} />
            <TooltipBtn value="test3" />
          </label>
          <label></label>
        </div>
      </OpenAnim>
    </>
  );
};

export default CustomInfo;
