import React, { Component } from "react";

class StreamDelete extends Component {
  render() {
    const { showDelete } = this.props;
    return (
      <div className={`delete-container ${showDelete ? "" : "d-none"}`}>
        <div className="delete">
          <button className="delete__delete" onClick={this.props.handleDelete}>
            delete
          </button>
          <button className="delete__cancel" onClick={this.props.handleCancel}>
            cancel
          </button>
        </div>
      </div>
    );
  }
}

export default StreamDelete;
