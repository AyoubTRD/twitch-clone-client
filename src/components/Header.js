import React from "react";
import { Link } from "react-router-dom";

import GoogleAuth from "./GoogleAuth";

class Header extends React.Component {
  render() {
    return (
      <header className="header clearfix">
        <Link to="/">
          <h1 className="header__logo">twatch</h1>
        </Link>
        <div className="header__links">
          <Link to="/" className="header__links-link">
            Streamers
          </Link>
          <GoogleAuth />
        </div>
      </header>
    );
  }
}

export default Header;
