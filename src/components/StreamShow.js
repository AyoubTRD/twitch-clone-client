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
    return (
      <div>
        <h1>StreamShow</h1>
      </div>
    );
  }
}

export default connect(
  ({ currentStream }) => ({ stream: currentStream }),
  { getStream }
)(StreamShow);
