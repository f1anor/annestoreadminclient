import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { change } from "redux-form";
import CodeInput from "./CodeInput";

const CodeInputContainer = ({
  input: { name, value },
  meta: { touched, error, form },
  ...props
}) => {
  const dispatch = useDispatch();
  const wrapper = useRef();

  // Нажатие клавиши. Проверяем на то что нажаты только цифры
  // либо backspace либо служебные кнопки. Остальное не пропускаем
  const handleKeyDown = (e) => {
    if (
      e.keyCode !== 8 &&
      e.keyCode !== 13 &&
      e.keyCode !== 27 &&
      !e.key.match("[0-9]")
    ) {
      e.preventDefault();
      return false;
    }

    const target = e.target;
    const num = target.getAttribute("data-input");

    // Если нажат backspace то проверям, существует ли предыдущее окно
    // и если оно есть и плюс ко всему наше текущее уже пустое
    // то переводим фокус в предыдущее окно
    if (e.keyCode === 8) {
      const prev = wrapper.current.querySelector(
        `input[data-input='${+num - 1}']`
      );

      if (!!prev && value[num].length === 0) {
        prev.focus();
        e.preventDefault();
        return false;
      }
    }
  };

  // Главный обработчик. Здесь меняем состояние.
  // Проверяем если в окне уже есть значение, то прерываем
  const handleChange = (e) => {
    const target = e.target;
    if (target.value.length > 1) return;
    const num = target.getAttribute("data-input");
    const newArr = [...value];
    newArr[num] = target.value;
    dispatch(change(form, name, newArr));
  };

  // Отпускание клавиши. Проверяем если нажат backspace и существует предыдущее
  // окно плюс наше текущее уже пустое - перекидываем фокус в предыдущее
  const handleKeyUp = (e) => {
    const target = e.target;
    const num = target.getAttribute("data-input");

    if (e.keyCode !== 8) {
      const next = wrapper.current.querySelector(
        `input[data-input='${+num + 1}']`
      );
      if (!next || value[num].length === 0) return;
      next.focus();
    }
  };

  return (
    <CodeInput
      handleChange={handleChange}
      handleKeyUp={handleKeyUp}
      handleKeyDown={handleKeyDown}
      value={value}
      ref={wrapper}
      error={error}
      {...props}
    />
  );
};
export default CodeInputContainer;
