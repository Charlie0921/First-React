import * as React from 'react'
import './style.css'




export const Button = ({ children, type, onClick, buttonStyle, buttonSize}) => {
    return (
        <button onClick = {onClick} type = {type}>
            hello world
        </button>
    )
}



export default Button