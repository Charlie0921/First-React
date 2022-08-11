import React from 'react';
import './Header.css';
import Button from "../../atoms/button/Button.js"

function Header() {
    return (
        <div className = "header">
            <img className = "header_logo" src = "https://blogpfthumb-phinf.pstatic.net/MjAyMDAyMjlfMTA3/MDAxNTgyOTcyMzU1NTc1.t1h2AVIOe0oA9_SlyLNw-LxRlrXSj2WQkoZoGqA7RHcg.EekjQaoc__wGy3hP4D769w3m7UrJniGosmkH_JdUQ3Yg.PNG.kunmiddle/sketch1582971799730.png?type=w161" alt = "profile"/>

                <div className = "header_search">
                    <input className="header_searchInput" type ="text"/>
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