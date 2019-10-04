import React from "react";

const gapi = window.gapi;

class GoogleAuth extends React.Component {
  componentDidMount() {
    gapi.load("client:auth2", () => {
      gapi.client.init({
        client_id:
          "152526256212-4t5q507go66hphls6pvnohrm2vr1ppoe.apps.googleusercontent.com",
        scope: "email"
      });
    });
  }
  handleClick = () => {
    const auth = gapi.auth2.getAuthInstance();
    auth.signIn();
  };
  render() {
    return (
      <button className="header__links-link" onClick={this.handleClick}>
        Login
      </button>
    );
  }
}

export default GoogleAuth;
