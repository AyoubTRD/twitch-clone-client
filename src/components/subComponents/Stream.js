import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { deleteStream } from "../../actions";
import StreamDelete from "./StreamDelete";

class Stream extends React.Component {
  state = {
    showDelete: false
  };
  showDeleteComp = () => {
    this.setState({ showDelete: true });
  };
  handleDelete = () => {
    const { deleteStream, id } = this.props;
    deleteStream(id);
    this.setState({ showDelete: false });
  };
  handleCancel = () => {
    this.setState({ showDelete: false });
  };
  render() {
    const {
      title,
      description,
      id,
      ownStream,
      userId,
      isSignedIn
    } = this.props;
    return (
      <div>
        <div className="stream">
          <Link className="invisi-link" to={`/streams/${id}`} />

          <div
            className={`stream__left ${
              ownStream && isSignedIn && userId === id ? "" : "full"
            }`}
          >
            <h2 className="stream__title">{title}</h2>
            <p className="stream__description">{description}</p>
          </div>
          {ownStream && isSignedIn && userId === id ? (
            <div className="stream__right">
              <div className="stream__actions">
                <Link
                  to="/stream/edit"
                  className="stream__action stream__action-edit"
                >
                  Edit
                </Link>
                <button
                  onClick={this.showDeleteComp}
                  className="stream__action stream__action-delete"
                >
                  Delete
                </button>
              </div>
            </div>
          ) : null}
        </div>
        <StreamDelete
          handleDelete={this.handleDelete}
          handleCancel={this.handleCancel}
          showDelete={this.state.showDelete}
        />
      </div>
    );
  }
}

export default connect(
  ({
    ownStream,
    user: {
      isSignedIn,
      profile: { id: userId }
    }
  }) => ({ ownStream, isSignedIn, userId }),
  { deleteStream }
)(Stream);
