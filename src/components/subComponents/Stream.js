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
    
  }
  handleCancel = () => {
    this.setState({showDelete: false})
  }
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
      <div className="stream">
        <Link className="invisi-link" to={`/streams/${id}`} children="" />

        <div className="stream__left">
          <h2 className="stream__title">{title}</h2>
          <p className="stream__description">{description}</p>
        </div>
        <div className="stream__right">
          {ownStream && isSignedIn && userId === id ? (
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
          ) : null}
          <StreamDelete handleDelete={this.handleDelete} handleCancel={this.handleCancel} showDelete={this.state.showDelete} />
        </div>
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
