import * as React from 'react';
import Header from "./components/organisms/Header/Header.js"
import SearchBar from "./components/organisms/SearchBox/SearchBox.js"

function App() {
  return (
    <div className = "App">
      <Header/>
      <SearchBar/>
      <h1> 본문</h1>
    </div>
  );
}

export default App;
