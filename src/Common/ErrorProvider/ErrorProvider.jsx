import TooltipBtn from "Common/TooltipBtn/TooltipBtn";
import React, { useEffect, useRef, useState } from "react";
import css from "./ErrorProvider.module.css";

const ErrorProvider = ({ children, isError, error, className, ...props }) => {
  const [errType, setErrType] = useState(false);
  const wrapper = useRef();

  let errorBadge = null;

  useEffect(() => {
    const inputElement =
      wrapper.current.querySelector("input") ||
      wrapper.current.querySelector("textarea");

    if (!errorBadge || !inputElement) return;
    if (inputElement.clientWidth - errorBadge.offsetWidth < 170)
      setErrType(true);
  }, [errorBadge, isError]);

  return (
    <div ref={wrapper} className={css.wrapper}>
      {children}
      {!!isError && !errType && (
        <span
          ref={(item) => (errorBadge = item)}
          className={[css.errorBadge, className].join(" ")}
        >
          {error}
        </span>
      )}
      {!!isError && !!errType && (
        <TooltipBtn
          className={[css.errorTooltip, className].join(" ")}
          value={error}
          placeholder="!"
        />
      )}
    </div>
  );
};
export default ErrorProvider;
