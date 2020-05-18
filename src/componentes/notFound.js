import React, { Component } from "react";

import { Link } from "react-router-dom";

export class NotFound extends Component {
  render() {
    return (
      <div className="container notfound">
        <h1 className="title">404!</h1>
        <h2 className="subtitle">La página no existe</h2>
        <Link to={`/`}>
          <button className="button is-info">Volver A Inicio</button>
        </Link>
      </div>
    );
  }
}
