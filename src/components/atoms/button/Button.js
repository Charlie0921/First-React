import * as React from 'react'

function Button(props) {
    return(
    <div className = "ButtonBox"> 
    <button>{props.text}</button>
    </div>
    )
}

export default Button;