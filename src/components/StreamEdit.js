import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { editStream } from "../actions";
import renderInput from "./subComponents/inputField.js";

class StreamEdit extends Component {
  state = { redirect: false };
  componentDidMount() {
    const {
      initialize,
      ownStream: { description, title }
    } = this.props;
    initialize({
      description,
      title
    });
  }
  onSubmit = formValues => {
    const { editStream, id } = this.props;
    console.log("submitting");
    editStream({
      ...formValues,
      id
    });
    this.setState({ redirect: true });
  };
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form className="form" onSubmit={handleSubmit(this.onSubmit)}>
          <div className="form__box">
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
          <div className="form__box">
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
          <button type="submit" className="btn btn-main">
            edit
          </button>
        </form>
        {this.state.redirect ? <Redirect to="/" /> : null}
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
