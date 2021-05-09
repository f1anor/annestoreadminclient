import React from "react";
import css from "./Filters.module.css";
import { ReactComponent as FullStar } from "assets/svg/star-full.svg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Filters = ({ stars, currentStars }) => {
  return (
    <div className={css.wrapper}>
      {!!stars &&
        stars.map((item, index) => (
          <div className={css.row} key={index}>
            <div
              className={[
                css.starRow,
                currentStars === item.stars ? css.active : "",
              ].join(" ")}
            >
              <Link to={item.link} disabled>
                {item.stars > 0 && <FullStar className={css.star} />}
                {item.stars > 1 && <FullStar className={css.star} />}
                {item.stars > 2 && <FullStar className={css.star} />}
                {item.stars > 3 && <FullStar className={css.star} />}
                {item.stars > 4 && <FullStar className={css.star} />}
              </Link>
            </div>
            <div className={css.count}>{item.count || 0}</div>
          </div>
        ))}
      {/* <div className={css.row}>
        <div className={css.starRow}>
          <div className={css.star}>
            <FullStar />
          </div>
          <div className={css.star}>
            <FullStar />
          </div>
          <div className={css.star}>
            <FullStar />
          </div>
          <div className={css.star}>
            <FullStar />
          </div>
          <div className={css.star}>
            <FullStar />
          </div>
        </div>
        <div className={css.count}>{metaStars["5"] || 0}</div>
      </div>

      <div className={css.row}>
        <div className={css.starRow}>
          <div className={css.star}>
            <FullStar />
          </div>
          <div className={css.star}>
            <FullStar />
          </div>
          <div className={css.star}>
            <FullStar />
          </div>
          <div className={css.star}>
            <FullStar />
          </div>
        </div>
        <div className={css.count}>{metaStars["4"] || 0}</div>
      </div>

      <div className={css.row}>
        <div className={css.starRow}>
          <div className={css.star}>
            <FullStar />
          </div>
          <div className={css.star}>
            <FullStar />
          </div>
          <div className={css.star}>
            <FullStar />
          </div>
        </div>
        <div className={css.count}>{metaStars["3"] || 0}</div>
      </div>

      <div className={css.row}>
        <div className={css.starRow}>
          <div className={css.star}>
            <FullStar />
          </div>
          <div className={css.star}>
            <FullStar />
          </div>
        </div>
        <div className={css.count}>{metaStars["2"] || 0}</div>
      </div>

      <div className={css.row}> 
        <div className={css.starRow}>
          <div className={css.star}>
            <FullStar />
          </div>
        </div>
        <div className={css.count}>{metaStars["1"] || 0}</div>
      </div>*/}
    </div>
  );
};

export default Filters;
