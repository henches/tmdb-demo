import * as React from 'react';
import AllMovies from './AllMovies';
import './App.css';
import BestMovies from './BestMovies';

function App() {
  return (
    <div className="display-zone">
      <header>
        <img alt="logo TMDB" src={require("./images/logo.svg").default}/>
      </header>
      <div className="content">
        <BestMovies/>
        <hr className="solid"></hr>
        <AllMovies/>
      </div> 
    </div> 
  );
}

export default App;
