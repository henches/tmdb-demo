import * as React from 'react';
import AllMovies from './components/AllMovies';
import './App.css';
import BestMovies from './components/BestMovies';
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

function App() {
  return (
    <div className="app-container">
    <ReactNotifications />
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
    </div> 
  );
}

export default App;
