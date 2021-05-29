import React, { forwardRef } from "react";
import css from "./List.module.css";
import { ReactComponent as Smile1Icon } from "assets/svg/smile-1.svg";
import { ReactComponent as Smile2Icon } from "assets/svg/smile-2.svg";
import { ReactComponent as Smile3Icon } from "assets/svg/smile-3.svg";
import { ReactComponent as Smile4Icon } from "assets/svg/smile-4.svg";
import { ReactComponent as Smile5Icon } from "assets/svg/smile-5.svg";
import NoteMenu from "./NoteMenu/NoteMenu";

const List = ({ handleRemove, notes }, ref) => {
  return (
    <div className={css.notesContent} ref={ref}>
      {notes.length === 0 && (
        <div className={css.emptyMessage}>Ваше сообщение будет первым</div>
      )}
      {notes.length > 0 &&
        notes.map((item) => (
          <div key={item.date} className={css.message}>
            <div className={css.info}>
              <div>
                <span className={item.type === "user" ? css.userNoteName : ""}>
                  {item.owner}
                </span>
                <span className={css.time}>
                  {new Date(+item.date).toLocaleDateString("ru")}
                </span>
              </div>
              <NoteMenu handleRemove={handleRemove} time={item.date} />
            </div>
            <div className={css.comment}>
              {!!item.smile && (
                <div className={css.smile}>
                  {+item.smile === 5 && <Smile1Icon />}
                  {+item.smile === 4 && <Smile2Icon />}
                  {+item.smile === 3 && <Smile3Icon />}
                  {+item.smile === 2 && <Smile4Icon />}
                  {+item.smile === 1 && <Smile5Icon />}
                </div>
              )}
              {item.comment}
            </div>
          </div>
        ))}
    </div>
  );
};
export default forwardRef(List);
