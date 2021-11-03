import TotalCounter from "Common/TotalCounter/TotalCounter";
import React from "react";
import { ReactComponent as TrashIcon } from "assets/svg/trash.svg";
import { ReactComponent as OrderIcon } from "assets/svg/clipboard.svg";
import css from "./InfoLine.module.css";

const InfoLine = ({
  handleMoveToArchive,
  handleMakeOrder,
  selected,
  totalCount,
  isProdDisabled,
  ...props
}) => {
  return (
    <TotalCounter
      totalCount={totalCount}
      selected={selected}
      disabled={isProdDisabled}
    >
      {!!selected && selected.length > 0 && (
        <>
          <button className={css.btn} onClick={handleMakeOrder}>
            <OrderIcon />
            Cформировать заказ
          </button>
          <button className={css.btn} onClick={handleMoveToArchive}>
            <TrashIcon />В Архив
          </button>
        </>
      )}
    </TotalCounter>
  );
};
export default InfoLine;
