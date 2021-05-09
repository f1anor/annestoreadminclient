import React from "react";
import { ReactComponent as DotsIcon } from "assets/svg/three-dots.svg";
import css from "./Tools.module.css";
import DropdownMenuContainer from "Common/DropdownMenu/DropdownMenuContainer";

const Tools = ({
  active,
  admin,
  handleApply,
  handleRemove,
  handleRemoveAns,
  handleSetAns,
  handleSetEditAns,
  haveAns,
  inAns,
}) => {
  return (
    <div className={css.wrapper}>
      <DropdownMenuContainer button={<DotsIcon className={css.dots} />}>
        <ul>
          {!!active && !admin && !inAns && !haveAns && (
            <li>
              <button onClick={handleSetAns} className={css.btn}>
                Ответить
              </button>
            </li>
          )}
          {!!haveAns && !inAns && (
            <li>
              <button onClick={handleRemoveAns} className={css.btn}>
                Уд. ответ
              </button>
            </li>
          )}
          {!!haveAns && !inAns && (
            <li>
              <button onClick={handleSetEditAns} className={css.btn}>
                Ред. ответ
              </button>
            </li>
          )}
          {!active && (
            <li>
              <button className={css.btn} onClick={handleApply}>
                Подтвердить
              </button>
            </li>
          )}
          <li>
            <button className={css.btn} onClick={handleRemove}>
              Удалить
            </button>
          </li>
        </ul>
      </DropdownMenuContainer>
    </div>
  );
};

export default Tools;
