import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchAdmins } from "../../../../actions/users-actions";
import { useQuery } from "../../../../utils/utils";
import Admins from "./Admins";
import { getUsersDisabled } from "selectors/users-selectors";

import { getAdmins } from "selectors/users-selectors";

const AdminsContainer = ({ fetchAdmins, ...props }) => {
  const query = useQuery().toString();
  useEffect(() => {
    fetchAdmins(query);
  }, [fetchAdmins, query]);
  return <Admins {...props} />;
};

const mapStateToProps = (state) => ({
  admins: getAdmins(state),
  root: state.auth.root,
  isDisabled: getUsersDisabled(state),
});

export default connect(mapStateToProps, { fetchAdmins })(AdminsContainer);
