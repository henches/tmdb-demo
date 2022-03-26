import * as React from 'react';
import './App.css';
import * as backendService from './backendService';
import MoviesDTO from './DTO/MoviesDTO';
import MoviesCarousel from './MoviesCarousel';

export function BestMovies() {
  const [movies, setMovies] = React.useState<MoviesDTO>();

  React.useEffect(() => {
    backendService.getTopRated() 
    .then(movies => {
      console.log("movies = ", movies);
      setMovies(movies);
    })
    .catch(error => {
      console.log("error = ", error);
    })  
  }, []);

  return (
    <div className="best-movies-container">
      <h1 className="title">Les meilleurs films</h1>
      <MoviesCarousel movies={movies?.results}/>
    </div>
  );
}

export default BestMovies;
