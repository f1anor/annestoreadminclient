import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCategories } from "../../../../../actions/cat-actions";
import { editProduct } from "actions/product-actions";
import EditForm from "./EditForm";
import { clearFields } from "redux-form";
import { getCatForFrom } from "../../../../../selectors/cat-selectors";

class AddFormContainer extends Component {
  constructor(props) {
    super(props);
    const { fetchCategories } = this.props;
    fetchCategories();
  }

  componentWillUnmount() {
    const { clearFields } = this.props;
    clearFields("editProduct");
  }

  render() {
    const { editProduct, catForForm } = this.props;
    return (
      <>
        {!!catForForm && (
          <EditForm onSubmit={editProduct} catForForm={catForForm} />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  catForForm: getCatForFrom(state),
});

export default connect(mapStateToProps, {
  editProduct,
  clearFields,
  fetchCategories,
})(AddFormContainer);
