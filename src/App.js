import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";

import {Switch , Route } from "react-router-dom"

import {Form} from "./componentes/form.js"
import {Section} from "./componentes/sections.js";
import {NotFound} from "./componentes/notFound.js";


class App extends Component {

  render() {

    const url = new URL(document.location)
    const hasId = url.searchParams.has("question")
    //console.log(url.searchParams.get("question"))

    return (
      <div className="App">
        <Switch>
            <Route exact path="/" component={Form}></Route>
            <Route path="/question/:text" component={Section}></Route>
            <Route component={NotFound}></Route>
          </Switch>
      </div>
    );
  }
}

export default App;
