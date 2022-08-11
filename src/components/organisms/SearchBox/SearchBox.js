import * as React from 'react';
import './SearchBox.css'
import SearchBar from '../../molecules/SearchBar/SearchBar.js'
import CategoryBox from '../../molecules/CategoryBox/CategoryBox.js'

function SearchBox() {
    return(
        <div className = "all">
            <div className = "searchBox">
                <div className = "item"><SearchBar/></div>
                <div className = "item"><CategoryBox/></div>
            </div>
        </div>
    )
}

export default SearchBox;