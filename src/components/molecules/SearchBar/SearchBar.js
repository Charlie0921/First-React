import * as React from 'react';
import './SearchBar.css';
import Button from "../../atoms/button/Button.js"


function SearchBar() {
    return(
        <div className = "searchBar">
            <div className = "header_search">
                <input className="header_searchInput" type ="text"/>
                <Button text ="Search"/>
            </div>
        </div>
    )
}

export default SearchBar;