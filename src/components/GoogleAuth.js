import React from "react";
import { connect } from "react-redux";

import { authenticate } from "../actions";

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
        });
    });
  }

  authListener = () => {
    this.props.authenticate(
      this.auth.isSignedIn.get(),
      this.auth.currentUser.get()
    );
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
    const { isSignedIn } = this.props.user;
    let msg = "";
    if (this.state.isReady) {
      if (isSignedIn) {
        msg = "Logout";
      } else {
        msg = "Login";
      }
    } else {
      msg = "Please wait";
    }
    return (
      <button className="header__links-link" onClick={this.handleClick}>
        {msg}
      </button>
    );
  }
}

const mapStateToProps = ({ user }) => ({ user });

export default connect(
  mapStateToProps,
  { authenticate }
)(GoogleAuth);
