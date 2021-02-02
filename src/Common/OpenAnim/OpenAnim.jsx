import React, { useEffect, useRef, useState } from "react";
import css from "./OpenAnim.module.css";

const OpenAnim = ({ children, isOpen, className = "" }) => {
  const wrapper = useRef(null);
  const [size, changeSize] = useState("auto");
  const [overflow, setOverflow] = useState("hidden");

  const maxHeight = wrapper.current && wrapper.current.scrollHeight + "px";

  useEffect(() => {
    if (!!isOpen) {
      changeSize(wrapper.current.scrollHeight + "px");

      setTimeout(() => {
        setOverflow("unset");
        changeSize("auto");
      }, 400);
    } else {
      setOverflow("hidden");
      changeSize(maxHeight);
      setTimeout(() => {
        changeSize("0px");
      }, 1);
    }
  }, [isOpen, changeSize, maxHeight]);

  return (
    <div
      className={[css.wrapper, className].join(" ")}
      style={{ height: size, overflow: overflow }}
      ref={wrapper}
    >
      <div className={css.inner}>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default OpenAnim;
