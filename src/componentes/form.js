import React, { Component } from "react";

import {Link } from "react-router-dom"

export class Form extends Component {
  state = {
    question: "¿Quieres ser mi novia?"
  };

  

  _handleChange = (e) => {
    this.setState({ question: e.target.value })
  };

  _handleSumbmit = (e) => {
    e.preventDefault()
    this.props.onChange(this.state.question)
  };

  render() {
    return (
      <div className="ShearchForm-wrapper">
      <form onSubmit={this._handleSumbmit}>
          <div className="field has-addons">
            <div className="control">
              <input
                className="input"
                type="text"
                onChange={this._handleChange}
                placeholder="Question to generate..."
              ></input>
            </div>
            <div className="control">

              <Link to={`/question/${this.state.question}`}>
                  <button className="button is-info">
                      Generate
                  </button>
              </Link>

            </div>
          </div>
      </form>
      </div>
    );
  }
}
