import React from "react";
import { connect } from "react-redux";
import Item from "./Item";
import { useQuery } from "utils/utils";
import { toggleAccess } from "../../../../../../../actions/users-actions";
import { getUsersDisabled } from "selectors/users-selectors";
import { setImg } from "actions/app-actions";

const ItemContainer = ({ admin, root, toggleAccess, setImg, isDisabled }) => {
  const query = useQuery().toString();
  const handleToggleAccess = () => {
    toggleAccess(!admin.status, admin._id, query);
  };
  return (
    <Item
      admin={admin}
      root={root}
      handleToggleAccess={handleToggleAccess}
      setImg={setImg}
      isDisabled={isDisabled}
    />
  );
};

const mapStateToProps = (state) => ({
  root: state.auth.root,
  isDisabled: getUsersDisabled(state),
});

export default connect(mapStateToProps, { toggleAccess, setImg })(
  ItemContainer
);
