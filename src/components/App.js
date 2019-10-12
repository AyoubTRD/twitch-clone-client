import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";

import { getStreams, stream as streamAction } from "../actions";

import StreamList from "./StreamList";
import StreamShow from "./StreamShow";
import StreamCreate from "./StreamCreate";
import StreamEdit from "./StreamEdit";

import Header from "./Header";

class App extends Component {
  state = {
    streamsReady: false
  };
  componentDidMount() {
    const { getStreams } = this.props;
    getStreams(streams => {
      this.setState({ streamsReady: true });
    });
  }
  render() {
    return (
      <BrowserRouter>
        <Header />

        {this.state.streamsReady ? (
          <Route path="/" exact component={StreamList} />
        ) : null}
        <Route path="/stream/show/:id" exact component={StreamShow} />
        {this.props.authReady ? (
          <Route path="/stream/edit" exact component={StreamEdit} />
        ) : null}
        <Route path="/stream/create" exact component={StreamCreate} />
      </BrowserRouter>
    );
  }
}

export default connect(
  ({ user, authReady }) => ({ user, authReady }),
  { getStreams, streamAction }
)(App);
