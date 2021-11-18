import React, { forwardRef } from "react";
import css from "./CodeInput.module.css";

const CodeInput = (
  { handleChange, handleKeyUp, handleKeyDown, value, error, disabled },
  ref
) => {
  return (
    <div className={css.wrapper} ref={ref}>
      <div className={css.part}>
        <input
          value={value[0]}
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          onKeyDown={handleKeyDown}
          data-input={0}
          autoFocus
          disabled={disabled}
        />
        <input
          value={value[1]}
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          onKeyDown={handleKeyDown}
          data-input={1}
          disabled={disabled}
        />
        <input
          value={value[2]}
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          onKeyDown={handleKeyDown}
          data-input={2}
          disabled={disabled}
        />
      </div>
      <div className={css.part}>
        <input
          value={value[3]}
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          onKeyDown={handleKeyDown}
          data-input={3}
          disabled={disabled}
        />
        <input
          value={value[4]}
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          onKeyDown={handleKeyDown}
          data-input={4}
          disabled={disabled}
        />
        <input
          value={value[5]}
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          onKeyDown={handleKeyDown}
          data-input={5}
          disabled={disabled}
        />
      </div>
      {!!error && <div className={css.error}>{error}</div>}
    </div>
  );
};
export default forwardRef(CodeInput);
