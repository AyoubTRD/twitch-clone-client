import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import { editStream } from "../actions";
import renderInput from "./subComponents/inputField.js";

class StreamEdit extends Component {
  componentDidMount() {
    document.body.classList.add("form-body");
    const {
      initialize,
      ownStream: { description, title }
    } = this.props;
    initialize({
      description,
      title
    });
  }
  componentWillUnmount() {
    document.body.classList.remove("form-body");
  }
  onSubmit = formValues => {
    const { editStream, id } = this.props;
    console.log("submitting");
    editStream({
      ...formValues,
      id
    });
  };
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="container form-container">
        <h1 className="h h-center h-form">Edit stream</h1>
        <form className="form" onSubmit={handleSubmit(this.onSubmit)}>
          <div className="form-box">
            <Field
              name="title"
              component={renderInput}
              info={{
                type: "text",
                name: "title",
                placeholder: "title",
                id: "title",
                label: "Enter new title:"
              }}
            />
          </div>
          <div className="form-box">
            <Field
              name="description"
              component={renderInput}
              info={{
                type: "text",
                name: "description",
                id: "description",
                placeholder: "description",
                label: "Enter new description:"
              }}
            />
          </div>
          <button type="submit" className="btn btn-main">
            edit
          </button>
        </form>
      </div>
    );
  }
}

const validate = ({ description, title }) => {
  const errors = {};
  if (!title) {
    errors.title = "You must provide a title";
  }
  if (!description) {
    errors.description = "You must provide a description";
  }
  return errors;
};

const compWrap = reduxForm({
  form: "streamEdit",
  validate
})(StreamEdit);

const mapStateToProps = ({
  ownStream,
  user: {
    profile: { id }
  }
}) => ({ ownStream, id });

export default connect(
  mapStateToProps,
  { editStream }
)(compWrap);
