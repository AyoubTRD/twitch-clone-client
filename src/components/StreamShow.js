import React from "react";

class StreamShow extends React.Component {
  render() {
    const {match: {params: {id}}} = this.props
    console.log(id)
    return (
      <div>
        <h1>StreamShow</h1>
      </div>
    );
  }
}

export default StreamShow;
