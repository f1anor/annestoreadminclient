import FormBlock from "Common/FormBlock/FormBlock";
import FormBlockTitle from "Common/FormBlockTitle/FormBlockTitle";
import React from "react";
import PrintNotes from "./PrintNotes/PrintNotes";
import { ReactComponent as CommentsIcon } from "assets/svg/chat-square-dots-fill.svg";
import css from "./ManagerNotes.module.css";
import FormButtonMini from "Common/FormButtonMini/FormButtonMini";
import ArrowBtn from "Common/ArrowBtn/ArrowBtn";
import OpenAnim from "Common/OpenAnim/OpenAnim";

const ManagerNotes = ({
  showAdw,
  handleSetShowAdw,
  handleSetModal,
  notes,
  form,
  editMode,
}) => {
  return (
    <FormBlock>
      <FormBlockTitle counter={`${notes.length}/10`}>
        Заметки Менеджера
        <ArrowBtn onClick={handleSetShowAdw} down={!!showAdw} />
      </FormBlockTitle>
      <OpenAnim isOpen={!!showAdw}>
        <div className={css.content}>
          {notes.length === 0 && (
            <div className={css.label}>
              <CommentsIcon className={css.commentsIcon} />
              <div className={css.text}>Заметки отсутствуют</div>
            </div>
          )}

          {notes.length > 0 && (
            <PrintNotes notes={notes} form={form} editMode={editMode} />
          )}
        </div>

        <div className={css.btnLine}>
          <FormButtonMini
            type="button"
            onClick={handleSetModal}
            disabled={notes.length >= 10}
          >
            Добавить
          </FormButtonMini>
        </div>
      </OpenAnim>
    </FormBlock>
  );
};

export default ManagerNotes;
