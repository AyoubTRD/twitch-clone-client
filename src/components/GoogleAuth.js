import React from "react";
import { connect } from "react-redux";

import { authenticate, stream, authReady } from "../actions";

const gapi = window.gapi;

class GoogleAuth extends React.Component {
  state = {
    isReady: false
  };
  componentDidMount() {
    gapi.load("client:auth2", () => {
      gapi.client
        .init({
          client_id:
            "152526256212-4t5q507go66hphls6pvnohrm2vr1ppoe.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = gapi.auth2.getAuthInstance();
          this.setState({ isReady: true });
          this.authListener();
          this.auth.isSignedIn.listen(this.authListener);
          this.props.authReady();
        });
    });
  }

  authListener = () => {
    const isSignedIn = this.auth.isSignedIn.get();
    const user = this.auth.currentUser.get();
    this.props.authenticate(isSignedIn, user);
    const { streams } = this.props;
    if (isSignedIn) {
      const id = user.getId();
      if (streams[id]) {
        this.props.stream(streams[id]);
      }
    }
  };

  handleClick = async () => {
    const { isSignedIn } = this.props.user;
    if (!isSignedIn) {
      await this.auth.signIn();
      return;
    }
    await this.auth.signOut();
  };

  render() {
    const { isReady } = this.state;
    const { isSignedIn } = this.props.user;
    let msg = "";
    if (isReady) {
      if (isSignedIn) {
        msg = "Logout";
      } else {
        msg = "Login";
      }
    } else {
      msg = "Please wait";
    }
    return (
      <button
        className="header__links-link"
        onClick={isReady ? this.handleClick : () => {}}
      >
        {msg}
      </button>
    );
  }
}

const mapStateToProps = ({ user, streams }) => ({ user, streams });

export default connect(
  mapStateToProps,
  { authenticate, stream, authReady }
)(GoogleAuth);
