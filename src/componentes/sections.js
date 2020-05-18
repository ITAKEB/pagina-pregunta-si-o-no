import React, { Component } from "react";

import { Botones } from "./botones.js";

export class Section extends Component {

    state={
        respuesta:null, question:""
      }
    
      _cambiar = () =>{
        this.setState({respuesta:"https://i.pinimg.com/originals/34/aa/e2/34aae2e80494ddbcc81a8866e3ac26bb.gif"})
      }


      componentDidMount(){
        //console.log(this.props.match)
        const {text}= this.props.match.params
        console.log(text)
        this.setState({question: text})

      }

  render() {

    return (
      <div>
        <section className="section">
          <div className="container">
            <h1 className="title">{this.state.question}?</h1>
            <Botones cambiarDiv={this._cambiar}></Botones>
          </div>
          {this.state.respuesta === null? 
          <h4 className="title">Elige una respuesta</h4>:
          <div>
            <h4 className="title">Sabia que dirías que sí</h4>
            <img src={this.state.respuesta}></img>
          </div>
          }

        </section>
      </div>
    );
  }
}
