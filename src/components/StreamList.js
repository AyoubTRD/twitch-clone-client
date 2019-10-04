import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class StreamList extends React.Component {
  showCreateStreamLink = () => {
    const { isSignedIn } = this.props;
    if (isSignedIn) {
      return (
        <Link className="btn link-btn" to="/stream/create">
          Create a stream
        </Link>
      );
    }
  };

  render() {
    return (
      <div>
        {this.showCreateStreamLink()}
        <h1>StreamList</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({ isSignedIn: state.user.isSignedIn });

export default connect(mapStateToProps)(StreamList);
