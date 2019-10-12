import React from "react";
import { connect } from "react-redux";

import { getStream } from "../actions";

class StreamShow extends React.Component {
  componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    this.props.getStream(id);
  }
  render() {
    const { title, description } = this.props.stream;
    return (
      <div className="container">
        <h1 className="h h-title">{title}</h1>
        <p className="p">{description}</p>
      </div>
    );
  }
}

export default connect(
  ({ currentStream }) => ({ stream: currentStream }),
  { getStream }
)(StreamShow);
