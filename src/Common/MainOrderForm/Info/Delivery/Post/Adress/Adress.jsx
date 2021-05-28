import ErrorProvider from "Common/ErrorProvider/ErrorProvider";
import React, { useEffect, useState } from "react";
import { AddressSuggestions } from "react-dadata";
import "react-dadata/dist/react-dadata.css";
import { useDispatch } from "react-redux";
import { change } from "redux-form";
import css from "./Adress.module.css";

const Adress = React.memo(
  ({
    meta: { touched, form, error },
    input: { name, onFocus, onBlur, value },
  }) => {
    const dispatch = useDispatch();
    const [val, setVal] = useState({});

    // Устанавливаем первоначальное значение если оно уже есть в заказе (при редактировании заказа)
    useEffect(() => {
      if (!!value && !val.value) {
        setVal({ value });
      }
    }, [val, value]);

    const isError = touched && error;

    const handleSetVal = (val) => {
      console.log(val);
      setVal(val);
      dispatch(change(form, name, val.value));
      if (val.data.postal_code) {
        dispatch(change(form, "postIndex", val.data.postal_code));
      }
    };

    const handleChange = (e) => {
      dispatch(change(form, name, e.target.value));
      dispatch(change(form, "postIndex", ""));
      dispatch(change(form, "deliveryPrice", ""));
    };

    return (
      <div className={css.inputWrapper}>
        <ErrorProvider error={error} isError={isError}>
          <AddressSuggestions
            token={process.env.REACT_APP_DADATA_KEY}
            value={val}
            onChange={handleSetVal}
            count={5}
            inputProps={{
              onChange: handleChange,
              onFocus: onFocus,
              onBlur: onBlur,
              className: [css.input, isError ? css.error : ""].join(" "),
            }}
            containerClassName={css.container}
            suggestionClassName={css.suggestion}
            currentSuggestionClassName={css.currentSuggestion}
            highlightClassName={css.highlight}
          />
        </ErrorProvider>
      </div>
    );
  }
);
export default Adress;
