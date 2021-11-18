import React from "react";
import { useSelector } from "react-redux";
import {
  getMetaActive,
  getMetaStars,
  getMetaWait,
  getMetaName,
  getMetaImg,
} from "selectors/comments-selectors";
import Info from "./Info";

const InfoContainer = React.memo(({ ...props }) => {
  const metaActive = useSelector((state) => getMetaActive(state));
  const metaWait = useSelector((state) => getMetaWait(state));
  const metaStars = useSelector((state) => getMetaStars(state));
  const metaName = useSelector((state) => getMetaName(state));
  const metaImg = useSelector((state) => getMetaImg(state));
  return (
    <Info
      metaActive={metaActive}
      metaWait={metaWait}
      metaStars={metaStars}
      metaName={metaName}
      metaImg={metaImg}
      {...props}
    />
  );
});

export default InfoContainer;
