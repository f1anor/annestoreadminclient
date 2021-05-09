import React from "react";
import { ReactComponent as ChatIcon } from "assets/svg/chat-left-text.svg";
import css from "./Notes.module.css";
import { Badge } from "react-bootstrap";

const Notes = ({ userNotes, managerNotes, setNote }) => {
  const mNotes = managerNotes.map((note) => {
    return (
      <div className={css.note} key={note.date}>
        <Badge variant="primary">
          {new Date(+note.date).toLocaleString("ru")}:
        </Badge>
        <div className="mt-2 mb-3">{note.note}</div>
      </div>
    );
  });

  const uNotes = userNotes.map((note) => {
    return (
      <div className={css.note} key={note.date}>
        <Badge variant="warning">
          {new Date(+note.date).toLocaleString("ru")}:
        </Badge>
        <div className="mt-2 mb-3">{note.note}</div>
      </div>
    );
  });
  return (
    <td>
      <div className="d-flex">
        {userNotes.length > 0 && (
          <div className={css.iconWrapper}>
            <ChatIcon
              className={css.userIcon}
              onClick={() => setNote(uNotes)}
            />
          </div>
        )}
        {managerNotes.length > 0 && (
          <div className={css.iconWrapper}>
            <ChatIcon className={css.admIcon} onClick={() => setNote(mNotes)} />
          </div>
        )}
      </div>
    </td>
  );
};

export default Notes;
