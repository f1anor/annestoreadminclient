import React from "react";
import { useDispatch } from "react-redux";
import { change } from "redux-form";
import Phone from "./Phone";

const PhoneContainer = ({ formName, ...props }) => {
  const dispatch = useDispatch();

  const checkNumber = (e) => {
    if (e.keyCode === 13 || e.keyCode === 27 || e.keyCode === 8) return;

    if (
      !(
        e.shiftKey === false &&
        (e.keyCode === 46 ||
          e.keyCode === 8 ||
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
          dispatch(change(formName, "phone", `+7 (${e.key}`));
          break;
        }
        case 6: {
          e.preventDefault();
          dispatch(change(formName, "phone", `${value}${e.key}) `));
          break;
        }
        case 11: {
          e.preventDefault();
          dispatch(change(formName, "phone", `${value}${e.key} `));
          break;
        }
        case 14: {
          e.preventDefault();
          dispatch(change(formName, "phone", `${value}${e.key} `));
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

  return <Phone checkNumber={checkNumber} />;
};
export default PhoneContainer;
