import Input from "Common/Input/Input";
import React, { forwardRef } from "react";
import css from "./SizesTableInput.module.css";
import TableS from "./TableS/TableS";
import BadgesListContainer from "./BadgesList/BadgesListContainer";

const SizesTableInput = (
  {
    inputValue,
    handleChangeInput,
    handleAddSize,
    value,
    handleAddSizeKey,
    type,
    meta,
    ...props
  },
  ref
) => {
  return (
    <div className={css.wrapper}>
      {+type === 2 && (
        <div ref={ref}>
          <Input
            simple={true}
            value={inputValue}
            onChange={handleChangeInput}
            onKeyDown={handleAddSizeKey}
            meta={meta}
            Icon={() => (
              <button
                className={css.icon}
                onClick={handleAddSize}
                type="button"
              >
                +
              </button>
            )}
          />
        </div>
      )}

      {value.length > 0 && <BadgesListContainer value={value} {...props} />}
      {value.length > 0 && <TableS value={value} />}
    </div>
  );
};
export default forwardRef(SizesTableInput);
