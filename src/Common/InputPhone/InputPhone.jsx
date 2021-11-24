import React from "react";
import Input from "Common/Input/Input";
import { useDispatch } from "react-redux";
import { change } from "redux-form";

const InputPhone = React.memo(({ input, meta, ...props }) => {
  const dispatch = useDispatch();

  const { name } = input;
  const { form } = meta;

  // Форматируем ввод
  const handleKeyDown = (e) => {
    if (e.keyCode === 13 || e.keyCode === 27 || e.keyCode === 8) return;

    if (
      !(
        e.shiftKey === false &&
        (e.keyCode === 46 ||
          e.keyCode === 8 ||
          e.keyCode === 9 ||
          e.keyCode === 37 ||
          e.keyCode === 39 ||
          (e.keyCode >= 48 && e.keyCode <= 57))
      )
    ) {
      e.preventDefault();
      return false;
    }
    if (e.keyCode >= 48 && e.keyCode <= 57) {
      const { value } = e.target;
      const { length } = value;

      switch (length) {
        case 0: {
          e.preventDefault();
          dispatch(change(form, name, `+7 (${e.key}`));
          break;
        }
        case 6: {
          e.preventDefault();
          dispatch(change(form, name, `${value}${e.key}) `));
          break;
        }
        case 11: {
          e.preventDefault();
          dispatch(change(form, name, `${value}${e.key} `));
          break;
        }
        case 14: {
          e.preventDefault();
          dispatch(change(form, name, `${value}${e.key} `));
          break;
        }
        case 18: {
          e.preventDefault();
          break;
        }
        default:
          return;
      }
    }
  };
  return (
    <Input input={input} meta={meta} {...props} onKeyDown={handleKeyDown} />
  );
});

export default InputPhone;
