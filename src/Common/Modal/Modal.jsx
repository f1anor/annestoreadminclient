import React, { useEffect, useRef } from "react";
import css from "./Modal.module.css";
import { ReactComponent as XIcon } from "assets/svg/x.svg";

const Modal = ({ close, children, className = "", wrapperClassName = "" }) => {
  const inner = useRef();

  const handleClose = (e) => {
    const closest = e.target.closest(`.${css.inner}`);
    const closeBtn = e.target.closest("button[data-modal-close]");
    if (!closeBtn && inner.current === closest) return;

    close(null);
  };

  // Закрытие модального окна при нажатии ESC
  useEffect(() => {
    const keyClose = (e) => {
      if (e.keyCode === 27) close(null);
    };
    window.addEventListener("keydown", keyClose);

    return () => {
      window.removeEventListener("keydown", keyClose);
    };
  }, []);

  return (
    <div>
      <div
        className={[css.wrapper, wrapperClassName].join(" ")}
        onClick={handleClose}
      >
        <div className={[css.inner, className].join(" ")} ref={inner}>
          <button
            className={css.closeBtn}
            data-modal-close="true"
            type="button"
          >
            <XIcon />
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
