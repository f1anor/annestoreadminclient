import React from "react";
import { Toast } from "react-bootstrap";

const ToastItem = ({ message, removeToastMessage }) => {
  return (
    <Toast onClose={() => removeToastMessage(message.id)}>
      <Toast.Header>Уведомление</Toast.Header>
      <Toast.Body>{message.content}</Toast.Body>
    </Toast>
  );
};

export default ToastItem;
