import React, {Component} from "react"
import { Boton } from "./boton";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSadCry,faLaughSquint } from "@fortawesome/free-solid-svg-icons";
export class Botones extends Component {
    state = {res1: "¡Si!" , res2: "¡No!", cont : 0, res: ""}
    

    _onMouseOver = (children) =>{
        
        if(children === "¡No!" && this.state.cont === 0){
            this.setState({res1: "¡No!",res2: "¡Si!",cont: 1})
        }

        if(children === "¡No!" && this.state.cont === 1){
            this.setState({res2: "¡No!",res1:"¡Si!",cont: 0})
        }
        
    }

    _onHandleClick = (children) =>{
        if(children === "¡Si!"){
             this._res()
        }
    }

    _res = ()=>{
        this.props.cambiarDiv()
    }

    render(){
        return(
            <div className="botones">
                <Boton 
                OnHandleClick={this._onHandleClick}
                onMouseOver={this._onMouseOver}
                icon={(this.state.res1 === "¡Si!")?<FontAwesomeIcon icon={faLaughSquint}/> :
                <FontAwesomeIcon icon={faSadCry}/>  }
                >{this.state.res1}
                </Boton>
                
                <Boton 
                OnHandleClick={this._onHandleClick}
                onMouseOver={this._onMouseOver}
                icon={(this.state.res2 === "¡Si!")?<FontAwesomeIcon icon={faLaughSquint}/> :
                <FontAwesomeIcon icon={faSadCry}/>  }
                >{this.state.res2}
                </Boton>
            </div>
        )
    }
}