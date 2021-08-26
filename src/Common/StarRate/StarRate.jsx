import React from "react";
import css from "./StarRate.module.css";
import { ReactComponent as FullStarIcon } from "assets/svg/star-full.svg";
import { ReactComponent as EmptyStarIcon } from "assets/svg/star-empty.svg";

const StarRate = ({ stars }) => {
  const arr = [1, 2, 3, 4, 5];
  // for (let i = 1; i <= stars; i++) {
  //   full.push(i);
  // }
  return (
    <div className={css.wrapper}>
      {arr.map((item, index) => (
        <div key={index}>
          {index + 1 > stars && (
            <EmptyStarIcon key={item} className={css.star} />
          )}
          {index + 1 <= stars && (
            <FullStarIcon key={item} className={css.star} />
          )}
        </div>
      ))}
    </div>
  );
};

export default StarRate;
