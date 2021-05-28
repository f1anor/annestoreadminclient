import { checkDeliveryPrice } from "actions/orders-actions";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { formValueSelector } from "redux-form";
import { getIsDeliveryPriceGetting } from "selectors/orders-selectors";
import Post from "./Post";

const PostContainer = ({ formName }) => {
  const dispatch = useDispatch();

  const deliveryPriceAnim = useSelector((state) =>
    getIsDeliveryPriceGetting(state)
  );
  const postIndex = useSelector((state) =>
    formValueSelector(formName)(state, "postIndex")
  );

  const handleGetDeliveryPrice = () => {
    dispatch(checkDeliveryPrice(formName, postIndex));
  };
  return (
    <Post
      handleGetDeliveryPrice={handleGetDeliveryPrice}
      postIndex={postIndex}
      deliveryPriceAnim={deliveryPriceAnim}
    />
  );
};
export default PostContainer;
