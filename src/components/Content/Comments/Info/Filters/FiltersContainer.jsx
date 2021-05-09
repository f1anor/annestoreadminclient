import React from "react";
import Filters from "./Filters";
import { getQuery } from "utils/utils";
import { useLocation } from "react-router-dom";

const FiltersContainer = ({ metaStars }) => {
  const location = useLocation();
  const query = getQuery(location);
  const currentStars = +query.get("stars");

  const stars = Object.keys(metaStars)
    .map((item) => {
      query.set("stars", item);
      return {
        link: `${location.pathname}?${query.toString()}`,
        count: metaStars[item],
        stars: item,
      };
    })
    .reverse();

  return <Filters stars={stars} currentStars={currentStars} />;
};

export default FiltersContainer;
