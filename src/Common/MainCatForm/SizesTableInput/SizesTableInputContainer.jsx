import React, { useState, useRef, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { change, formValueSelector } from "redux-form";
import SizesTableInput from "./SizesTableInput";

const SizesTableInputContainer = ({
  input: { value, name },
  meta: { form },
  meta,
}) => {
  const ref = useRef();
  const dispatch = useDispatch();

  const type = useSelector((state) => formValueSelector(form)(state, "type"));

  // Задаем стандартную сетку размеров
  const standart = useMemo(() => {
    return ["s", "m", "l", "xl", "xxl"];
  }, []);

  const [inputValue, setInputValue] = useState("");

  // Переключаем содержимое таблицы размера в зависимости от типа
  useEffect(() => {
    if (+type === 0 || !type) dispatch(change(form, name, []));
    else if (+type === 1) dispatch(change(form, name, standart));
  }, [standart, dispatch, type, form, name]);

  // Проверяем, оличается ли текущая размерная сетка от стандартной. Если отличается, то автоматически меняем схему на кастомную
  // А если схема уже кастомная но при этом не отличается от стандартной, то меняем на стандартную
  useEffect(() => {
    if (value.length === 0) return;
    let equiv = true;

    for (let i = 0; i <= value.length; i++) {
      if (value[i] !== standart[i]) equiv = false;
    }

    if (!!equiv) dispatch(change(form, "type", 1));
    else if (!equiv) dispatch(change(form, "type", 2));
  }, [value, standart, dispatch, form]);

  const handleChangeInput = (e) => {
    const { value } = e.target;
    setInputValue(value);
  };

  const handleAddSize = () => {
    setTimeout(() => {
      ref.current && ref.current.querySelector("input").focus();
    }, 1);
    if (!inputValue) return;
    dispatch(change(form, name, [...value, inputValue]));
    setInputValue("");
  };

  // Обрабатываем добавление размера нажатием на кнопку Enter
  const handleAddSizeKey = (e) => {
    if (e.keyCode !== 13) return;
    handleAddSize();
    e.preventDefault();
    return false;
  };

  return (
    <SizesTableInput
      value={value}
      inputValue={inputValue}
      handleChangeInput={handleChangeInput}
      handleAddSize={handleAddSize}
      handleAddSizeKey={handleAddSizeKey}
      form={form}
      name={name}
      type={type}
      meta={meta}
      ref={ref}
    />
  );
};
export default SizesTableInputContainer;
