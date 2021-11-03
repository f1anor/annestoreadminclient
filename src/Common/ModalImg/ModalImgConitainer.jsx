import { setImg } from "actions/app-actions";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getModalImgs } from "selectors/app-selectors";
import ModalImg from "./ModalImg";

const ModalImgConitainer = ({ ...props }) => {
  const globalWrapper = useRef();
  const dispatch = useDispatch();
  const imgs = useSelector((state) => getModalImgs(state));

  const handleClose = () => {
    dispatch(setImg(null));
  };

  return (
    <>
      {!!imgs && !!imgs.imgs && imgs.imgs.length > 0 && (
        <ModalImg
          img={imgs.imgs[0].large}
          imgs={imgs.imgs}
          handleClose={handleClose}
          commentsID={imgs.comments}
          globalWrapper={globalWrapper}
        />
      )}
    </>
  );
};
export default ModalImgConitainer;
