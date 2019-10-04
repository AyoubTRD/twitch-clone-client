import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends Component {
  renderInput({ name, id, placeholder, type, label, classes }) {
    return function({ input }) {
      const lastClasses = classes ? `form__input ${classes}` : "form__input";

      return (
        <span>
          {label ? (
            <label for={id} className="form__label">
              {label}
            </label>
          ) : null}
          <input
            name={name}
            placeholder={placeholder}
            type={type}
            id={id}
            className={lastClasses}
            {...input}
          />
        </span>
      );
    };
  }

  render() {
    return (
      <div className="container">
        <form className="form">
          <div className="form-box">
            <Field
              name="title"
              component={this.renderInput({
                name: "title",
                placeholder: "title",
                type: "text",
                id: "title"
              })}
            />
          </div>
          <div className="form-box">
            <Field
              name="description"
              component={this.renderInput({
                name: "description",
                placeholder: "description",
                type: "text",
                id: "description"
              })}
            />
            <br />
            <button type="submit" className="btn btn-main">
              Create
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "streamCreate"
})(StreamCreate);
