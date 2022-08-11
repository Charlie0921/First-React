import * as React from 'react'
import './Button.css'

function Button(props) {
    return(
    <div className = "ButtonBox"> 
    <button>{props.text}</button>
    </div>
    )
}

export default Button;