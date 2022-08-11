import React from 'react';
import './Header.css';
import Button from "../../atoms/button/Button.js"

function Header() {
    return (
        <div className = "header">
            <img className = "header_logo" src = {process.env.PUBLIC_URL + "/logo.svg"} alt = "profile"/>

                <div className = "header_search">
                   
                </div>
            <div className = "header_nav">
                
                <Button text ="Sign Up"/>
                <Button text ="Log In"/>
                <Button text ="Theme"/>
                
            </div>
        </div>
        
    )
}

export default Header;