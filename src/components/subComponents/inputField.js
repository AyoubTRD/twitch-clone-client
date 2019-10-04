import React from "react"
export default ({
  info: { name, id, placeholder, type, label, classes },
  input,
  meta: { error, touched }
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
        autoComplete="off"
        name={name}
        placeholder={placeholder}
        type={type}
        id={id}
        className={lastClasses}
        {...input}
      />
      <p className="form__error">{touched ? error : null}</p>
    </span>
  );
};