import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

const renderInput = ({
  info: { name, id, placeholder, type, label, classes },
  input
}) => {
  
  const lastClasses = classes ? `form__input ${classes}` : "form__input";

  return (
    <span>
      {label ? (
        <label htmlFor={id} className="form__label">
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

class StreamCreate extends Component {
  onSubmit = ({ title, description }) => {
    console.log(title, description);
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
                id: "title",
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

export default reduxForm({
  form: "streamCreate"
})(StreamCreate);
