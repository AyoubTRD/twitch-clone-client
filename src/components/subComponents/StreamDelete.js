import React, { Component } from "react";

class StreamDelete extends Component {
  render() {
    const { showDelete } = this.props;
    return (
      <div className={`delete-container ${showDelete ? "" : "d-none"}`}>
        <div className="delete">
          <p className="delete__msg">
            Are you sure you want to delete the stream?
          </p>
          <div className="delete__actions">
            <button
              className="btn btn-delete"
              onClick={this.props.handleDelete}
            >
              delete
            </button>
            <button className="btn btn-main" onClick={this.props.handleCancel}>
              cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default StreamDelete;
