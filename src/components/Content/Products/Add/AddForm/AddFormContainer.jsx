import React, { Component } from "react";
import { connect } from "react-redux";

import { addProduct } from "actions/product-actions";
import AddForm from "./AddForm";
import { reset } from "redux-form";
import { fetchCategories } from "../../../../../actions/cat-actions";
import { getCatForFrom } from "../../../../../selectors/cat-selectors";

class AddFormContainer extends Component {
  constructor(props) {
    super(props);
    const { fetchCategories } = this.props;
    fetchCategories();

    this.handleClear = this.handleClear.bind(this);
  }

  componentWillUnmount() {
    const { reset } = this.props;

    reset("addProduct");
  }

  handleClear() {
    const { reset } = this.props;
    reset("addProduct");
  }

  render() {
    const { addProduct, catForForm, isAdding, isCatFetching } = this.props;

    return (
      <>
        {!!catForForm && (
          <AddForm
            onSubmit={addProduct}
            catForForm={catForForm}
            isAdding={isAdding}
            handleClear={this.handleClear}
            isCatFetching={isCatFetching}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  catForForm: getCatForFrom(state),
  isCatFetching: state.category.isFetching,
  isAdding: state.product.isAdding,
});

export default connect(mapStateToProps, {
  addProduct,
  reset,
  fetchCategories,
})(AddFormContainer);
