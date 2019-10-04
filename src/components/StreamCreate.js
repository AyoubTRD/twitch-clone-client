import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import { createStream } from "../actions";
import renderInput from "./subComponents/inputField";

class StreamCreate extends Component {
  onSubmit = formValues => {
    const { createStream, id } = this.props;
    const streamInfo = { ...formValues, id };
    createStream(streamInfo);
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="container">
        <h1>Create a stream</h1>
        <form
          className="create-form form"
          onSubmit={handleSubmit(this.onSubmit)}
        >
          <div className="form-box">
            <Field
              name="title"
              component={renderInput}
              info={{
                name: "title",
                placeholder: "title",
                type: "text",
                id: "title"
              }}
            />
          </div>
          <div className="form-box">
            <Field
              name="description"
              component={renderInput}
              info={{
                name: "description",
                placeholder: "description",
                type: "text",
                id: "description"
              }}
            />
          </div>
          <button type="submit" className="btn btn-main form__submit">
            Create
          </button>
        </form>
      </div>
    );
  }
}

const validate = ({ title, description }) => {
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
  form: "streamCreate",
  validate
})(StreamCreate);

const mapStateToProps = ({
  user: {
    profile: { id }
  }
}) => ({ id });

export default connect(
  mapStateToProps,
  { createStream }
)(compWrap);
