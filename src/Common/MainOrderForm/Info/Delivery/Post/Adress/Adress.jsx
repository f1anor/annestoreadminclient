import TooltipBtn from "Common/TooltipBtn/TooltipBtn";
import React, { useEffect, useState } from "react";
import { AddressSuggestions } from "react-dadata";
import "react-dadata/dist/react-dadata.css";
import { useDispatch } from "react-redux";
import { change } from "redux-form";
import css from "./Adress.module.css";

const Adress = React.memo(
  ({ meta: { touched, form, error }, input: { name, onFocus, onBlur } }) => {
    const dispatch = useDispatch();
    const [val, setVal] = useState();
    const [errType, setErrType] = useState(false);

    let errorBadge = null;
    let inputElement = null;
    const isError = touched && error;

    useEffect(() => {
      if (!errorBadge || !inputElement) return;
      if (inputElement.clientWidth - errorBadge.offsetWidth < 170)
        setErrType(true);
    }, [errorBadge, inputElement, isError]);

    const handleSetVal = (val) => {
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
      <div>
        <div className={css.inputWrapper}>
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
          {!!isError && !errType && (
            <span
              ref={(item) => (errorBadge = item)}
              className={css.errorBadge}
            >
              {error}
            </span>
          )}
          {!!isError && !!errType && (
            <TooltipBtn
              className={css.errorTooltip}
              value={error}
              placeholder="!"
            />
          )}
        </div>
      </div>
    );
  }
);
export default Adress;
