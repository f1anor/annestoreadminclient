import React, { useRef } from "react";
import css from "./Modal.module.css";

const Modal = ({ close, children, className = "" }) => {
  const inner = useRef();

  const handleClose = (e) => {
    const closest = e.target.closest(`.${css.inner}`);
    const closeBtn = e.target.closest("button[data-modal-close]");
    if (!closeBtn && inner.current === closest) return;

    close(null);
  };

  return (
    <div>
      <div className={css.wrapper} onClick={handleClose}>
        <div className={[css.inner, className].join(" ")} ref={inner}>
          <button
            className={css.closeBtn}
            data-modal-close="true"
            type="button"
          >
            &times;
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
