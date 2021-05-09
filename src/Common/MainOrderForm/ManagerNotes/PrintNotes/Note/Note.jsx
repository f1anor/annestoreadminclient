import React from "react";
import { Badge, Col, Row, Button } from "react-bootstrap";
import { ReactComponent as TrashIcon } from "assets/svg/trash2-fill.svg";
import css from "./Note.module.css";
import DropdownMenuContainer from "Common/DropdownMenu/DropdownMenuContainer";
import { ReactComponent as DotsIcon } from "assets/svg/three-dots.svg";
import { ReactComponent as Smile1Icon } from "assets/svg/smile-1.svg";
import { ReactComponent as Smile2Icon } from "assets/svg/smile-2.svg";
import { ReactComponent as Smile3Icon } from "assets/svg/smile-3.svg";
import { ReactComponent as Smile4Icon } from "assets/svg/smile-4.svg";
import { ReactComponent as Smile5Icon } from "assets/svg/smile-5.svg";

const Note = ({ handleRemove, note, editMode }) => {
  console.log(note.smile);
  return (
    <div className={css.wrapper}>
      <div className={css.tools}>
        <div className={css.time}>
          {new Date(note.date).toLocaleString("ru")}
        </div>

        <DropdownMenuContainer button={<DotsIcon className={css.dotsBtn} />}>
          <ul>
            <li>
              <button
                className={css.menuBtn}
                onClick={() => handleRemove(note.date)}
              >
                Удалить
              </button>
            </li>
          </ul>
        </DropdownMenuContainer>
      </div>
      <div className={css.content}>
        {+note.smile === 5 && <Smile1Icon />}
        {+note.smile === 4 && <Smile2Icon />}
        {+note.smile === 3 && <Smile3Icon />}
        {+note.smile === 2 && <Smile4Icon />}
        {+note.smile === 1 && <Smile5Icon />}
        {note.comment}
      </div>
      <div></div>
    </div>
    // <Row className="align-items-end">
    //   <Col md="2">
    //     <Badge variant="primary" style={{ fontSize: "14px" }}>
    //
    //     </Badge>
    //   </Col>
    //   <Col md="9">{note.note}</Col>
    //   <Col md="1">
    //     <Button
    //       onClick={() => handleRemove(note.date)}
    //       variant="none"
    //       disabled={!editMode}
    //     >
    //       <TrashIcon />
    //     </Button>
    //   </Col>
    // </Row>
  );
};

export default Note;
