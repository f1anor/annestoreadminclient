import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { removeToastMessage } from "../../../actions/app-actions";
import ToastItem from "./ToastItem";

const ToastItemContainer = ({ removeToastMessage, message }) => {
  const { id } = message;
  useEffect(() => {
    setTimeout(() => {
      removeToastMessage(id);
    }, 2000);
  }, [removeToastMessage, id]);
  return (
    <ToastItem message={message} removeToastMessage={removeToastMessage} />
  );
};

export default connect(null, { removeToastMessage })(ToastItemContainer);
