import React from "react";
import ImgPreview from "../../../../../../../../Common/ImgPreviev/ImgPreview";
import css from "./Avatar.module.css";

const Avatar = ({ img, firstName, lastName, setImg }) => {
  console.log(1231231231, `${process.env.REACT_APP_SERVER_ASSETS}${img.large}`);
  return (
    <div className={[css.wrapper, !img ? css.wrapperBordered : ""].join(" ")}>
      {!img && (
        <div className={css.initials}>
          <span>{firstName.slice(0, 1)}</span>
          <span>{lastName.slice(0, 1)}</span>
        </div>
      )}
      {!!img && (
        <ImgPreview
          img={img.small}
          onClick={() =>
            setImg({
              src: `${process.env.REACT_APP_SERVER_ASSETS}${img.large}`,
              name: "1 (Титульное)",
            })
          }
        />
      )}
    </div>
  );
};

export default Avatar;
