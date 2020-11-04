import React from "react";
import { ReactComponent as ChatIcon } from "assets/svg/chat-left-text.svg";
import css from "./Notes.module.css";

const Notes = ({ userNotes, managerNotes }) => {
  return (
    <td>
      <ChatIcon className={css.admIcon} />
    </td>
  );
};

export default Notes;
