import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import StreamList from "./StreamList";
import StreamShow from "./StreamShow";
import StreamCreate from "./StreamCreate";
import StreamEdit from "./StreamEdit";
import StreamDelete from "./StreamDelete";

import Header from "./Header";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={StreamList} />
        <Route path="/stream/show/:id" exact component={StreamShow} />
        <Route path="/stream/edit" exact component={StreamEdit} />
        <Route path="/stream/delete" exact component={StreamDelete} />
        <Route path="/stream/create" exact component={StreamCreate} />
      </BrowserRouter>
    );
  }
}

export default App;
