import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import css from "./TooltipBtn.module.css";

const TooltipBtn = ({ className = "", value = "" }) => {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {value}
    </Tooltip>
  );

  return (
    <OverlayTrigger overlay={renderTooltip}>
      <button
        type="button"
        className={[css.btn, className].join(" ")}
        data-tooltip={value}
        data-attr="tooltip-btn"
      >
        ?
      </button>
    </OverlayTrigger>
  );
};

export default TooltipBtn;
