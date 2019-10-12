import React from "react";
import { Link } from "react-router-dom";

export default function() {
  return (
    <div className="u-center">
      <h1 className="h h-center h-error">You must create a stream first</h1>
      <Link className="btn btn-link" to="/stream/create">
        Create a stream
      </Link>
    </div>
  );
}
