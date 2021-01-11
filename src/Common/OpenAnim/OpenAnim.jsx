import React, { useEffect, useRef, useState } from "react";
import css from "./OpenAnim.module.css";

const OpenAnim = ({ children, isOpen, className = "" }) => {
  const inner = useRef(null);
  const [size, changeSize] = useState("auto");

  const prevSize = inner.current && inner.current.offsetHeight + "px";

  useEffect(() => {
    if (!!isOpen) {
      changeSize(inner.current.offsetHeight + "px");
      setTimeout(() => {
        changeSize("auto");
      }, 400);
    } else {
      changeSize(prevSize);
      setTimeout(() => {
        changeSize("0px");
      }, 1);
    }
  }, [isOpen, changeSize, prevSize]);

  const handleAutoSize = () => {
    if (!!isOpen) changeSize("auto");
  };

  return (
    <div
      className={[css.wrapper, className].join(" ")}
      style={{ height: size }}
      onTransitionEnd={handleAutoSize}
    >
      <div ref={inner} className={css.inner}>
        <div style={{ display: !!isOpen ? "unset" : "none" }}>{children}</div>
      </div>
    </div>
  );
};

export default OpenAnim;
