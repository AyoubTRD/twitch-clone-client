import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import { editStream } from "../actions";
import renderInput from "./subComponents/inputField.js";

class StreamEdit extends Component {
  onSubmit = formValues => {
    const { editStream, id } = this.props;
    editStream({
      ...formValues,
      id
    });
  };
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form className="form" onSubmit={handleSubmit(this.onSubmit)}>
          <div class="form__box">
            <Field
              name="title"
              component={renderInput}
              info={{
                type: "text",
                name: "title",
                placeholder: "title"
              }}
            />
          </div>
          <div class="form__box">
            <Field
              name="description"
              component={renderInput}
              info={{
                type: "text",
                name: "description",
                placeholder: "description"
              }}
            />
          </div>
          <button className="btn btn-main">edit</button>
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
};

const compWrap = reduxForm({
  form: "streamEdit",
  validate
})(StreamEdit);

const mapStateToProps = ({
  stream,
  user: {
    profile: { id }
  }
}) => ({ stream, id });

export default connect(
  mapStateToProps,
  { editStream }
)(compWrap);
