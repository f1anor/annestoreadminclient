import { checkDeliveryPrice } from "actions/orders-actions";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { change, formValueSelector } from "redux-form";
import Post from "./Post";

const PostContainer = ({ formName, ...props }) => {
  const dispatch = useDispatch();
  const postIndex = useSelector((state) =>
    formValueSelector(formName)(state, "postIndex")
  );

  useEffect(() => {
    dispatch(change(formName, "deliveryPrice", ""));
  }, [postIndex, formName, dispatch]);

  //TODO: Проверить как работает
  useEffect(() => {
    return () => {
      dispatch(change(formName, "deliveryPrice", ""));
      dispatch(change(formName, "postIndex", ""));
      dispatch(change(formName, "adress", ""));
    };
  }, [dispatch, formName]);

  const handleGetDeliveryPrice = () => {
    dispatch(checkDeliveryPrice(formName, postIndex));
  };
  return (
    <Post
      handleGetDeliveryPrice={handleGetDeliveryPrice}
      postIndex={postIndex}
    />
  );
};
export default PostContainer;
