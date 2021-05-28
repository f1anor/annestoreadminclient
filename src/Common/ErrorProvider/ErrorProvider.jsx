import TooltipBtn from "Common/TooltipBtn/TooltipBtn";
import React, { useEffect, useRef, useState } from "react";
import css from "./ErrorProvider.module.css";

const ErrorProvider = ({ children, isError, error, className }) => {
  const [errType, setErrType] = useState(false);
  const wrapper = useRef();
  let errorBadge = useRef();

  useEffect(() => {
    const inputElement =
      wrapper.current.querySelector("input") ||
      wrapper.current.querySelector("textarea");

    if (!errorBadge.current || !inputElement) return;
    if (inputElement.clientWidth - errorBadge.current.offsetWidth < 170)
      setErrType(true);
  }, [errorBadge.current, isError]);

  return (
    <div ref={wrapper} className={css.wrapper}>
      {children}
      {!!isError && !errType && (
        <span
          ref={errorBadge}
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
