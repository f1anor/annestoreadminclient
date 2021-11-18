import React from "react";
import { ReactComponent as DotsIcon } from "assets/svg/three-dots.svg";
import css from "./Tools.module.css";
import DropdownMenuContainer from "Common/DropdownMenu/DropdownMenuContainer";
import DropdownMenuButton from "Common/DropdownMenuButton/DropdownMenuButton";
import { ReactComponent as TrashIcon } from "assets/svg/trash.svg";
import { ReactComponent as PenIcon } from "assets/svg/pen.svg";
import { ReactComponent as EraserIcon } from "assets/svg/eraser.svg";
import { ReactComponent as ResolveIcon } from "assets/svg/back.svg";
import { ReactComponent as SuccessIcon } from "assets/svg/check-all.svg";

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
              <DropdownMenuButton
                onClick={handleSetAns}
                className={css.menuItem}
              >
                <ResolveIcon className={css.resolveIcon} />
                Ответить
              </DropdownMenuButton>
            </li>
          )}
          {!!haveAns && !inAns && (
            <li>
              <DropdownMenuButton
                onClick={handleRemoveAns}
                className={css.menuItem}
              >
                <EraserIcon />
                Уд. ответ
              </DropdownMenuButton>
            </li>
          )}
          {!!haveAns && !inAns && (
            <li>
              <DropdownMenuButton
                className={css.menuItem}
                onClick={handleSetEditAns}
              >
                <PenIcon className={css.penIcon} />
                Ред. ответ
              </DropdownMenuButton>
            </li>
          )}
          {!active && (
            <li>
              <DropdownMenuButton
                className={css.menuItem}
                onClick={handleApply}
              >
                <SuccessIcon className={css.successIcon} />
                Подтвердить
              </DropdownMenuButton>
            </li>
          )}
          <li>
            <DropdownMenuButton
              onClick={handleRemove}
              className={[css.menuItem, css.trash].join(" ")}
            >
              <TrashIcon className={css.trashIcon} /> Удалить
            </DropdownMenuButton>
          </li>
        </ul>
      </DropdownMenuContainer>
    </div>
  );
};

export default Tools;
