import React, {Component } from "react"


export class Boton extends Component {

    _handleClick = (e) => {
        e.preventDefault()
        
        this.props.OnHandleClick(this.props.children)
    }

    _onMouseOver = (e) =>{
        e.preventDefault()
        this.props.onMouseOver(this.props.children)
    }

    
    render(){
        return(
            <button 
            onClick={this._handleClick} 
            onMouseOver={this._onMouseOver}
            className="button is-rounded">
                {this.props.children}
                {this.props.icon}
            </button>

        )
    }
}