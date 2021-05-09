import React, { useEffect, useState } from "react";
import css from "./StarInput.module.css";
import { ReactComponent as FullStarIcon } from "assets/svg/star-full.svg";
import { ReactComponent as EmptyStarIcon } from "assets/svg/star-empty.svg";

const StarInput = ({ value, onClick, className = "" }) => {
  let wrapper = null;
  const [star, setStar] = useState(0);

  useEffect(() => {
    if (!wrapper) return;
    wrapper.addEventListener("mousemove", (e) => {
      const target = e.target;
      const star = target.closest("[data-val]");
      if (!star) return;
      const val = star.getAttribute("data-val");
      if (!val) return;
      setStar(val);
    });
    wrapper.addEventListener("mouseleave", () => {
      setStar(0);
    });
  }, [wrapper]);

  return (
    <div
      className={[css.wrapper, className].join(" ")}
      ref={(item) => (wrapper = item)}
    >
      {star > 0 || (!star && +value > 0) ? (
        <FullStarIcon
          className={css.star}
          data-val="1"
          onClick={() => onClick(1)}
        />
      ) : (
        <EmptyStarIcon
          className={css.star}
          data-val="1"
          onClick={() => onClick(1)}
        />
      )}
      {star > 1 || (!star && +value > 1) ? (
        <FullStarIcon
          className={css.star}
          data-val="2"
          onClick={() => onClick(2)}
        />
      ) : (
        <EmptyStarIcon
          className={css.star}
          data-val="2"
          onClick={() => onClick(2)}
        />
      )}
      {star > 2 || (!star && +value > 2) ? (
        <FullStarIcon
          className={css.star}
          data-val="3"
          onClick={() => onClick(3)}
        />
      ) : (
        <EmptyStarIcon
          className={css.star}
          data-val="3"
          onClick={() => onClick(3)}
        />
      )}
      {star > 3 || (!star && +value > 3) ? (
        <FullStarIcon
          className={css.star}
          data-val="4"
          onClick={() => onClick(4)}
        />
      ) : (
        <EmptyStarIcon
          className={css.star}
          data-val="4"
          onClick={() => onClick(4)}
        />
      )}
      {star > 4 || (!star && +value > 4) ? (
        <FullStarIcon
          className={css.star}
          data-val="5"
          onClick={() => onClick(5)}
        />
      ) : (
        <EmptyStarIcon
          className={css.star}
          data-val="5"
          onClick={() => onClick(5)}
        />
      )}
    </div>
  );
};

export default StarInput;
