import React from "react";
import { Link } from "react-router-dom";

export default function({ title, description, id, ownStream }) {
  return (
    <div className="stream">
      <Link className="invisi-link" to={`/streams/${id}`} children="" />
      <h2 className="stream__title">{title}</h2>
      <p className="stream__description">{description}</p>
      {ownStream ? (
        <div className="stream__actions">
          <Link to="/stream/edit" className="stream__action stream__edit">
            Edit
          </Link>
          <button to="/stream/edit" className="stream__action stream__delete">
            Delete
          </button>
        </div>
      ) : null}
    </div>
  );
}
