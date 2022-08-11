import * as React from 'react';
import './CategoryBox.css';
import Button from "../../atoms/button/Button.js"


function CategoryBox() {
    return(
        <div className = "categoryBox">
            <div className = "category"><Button text ="Case Competition"/></div>
            <div className = "category"><Button text ="On campus Jobs"/></div>
            <div className = "category"><Button text ="Clubs"/></div>
            <div className = "category"><Button text ="Research Opportunities"/></div>
            <div className = "category"><Button text ="Internships"/></div>
            <div className = "category"><Button text ="Studying Abroad"/></div>
            <div className = "category"><Button text ="Scholarships"/></div>
            <div className = "category"><Button text ="Coperate Event"/></div>
        </div>
    )
}

export default CategoryBox;