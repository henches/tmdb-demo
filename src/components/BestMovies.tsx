import * as React from 'react';
import MoviesDTO from '../DTO/MoviesDTO';
import * as backendService from '../service/backendService';
import { raiseError } from '../utils/utils';
import MoviesCarousel from './MoviesCarousel';

export function BestMovies() {
  const [movies, setMovies] = React.useState<MoviesDTO>();

  React.useEffect(() => {
    backendService.getAll(1) 
    .then(movies => {
      setMovies(movies);
    })
    .catch(error => {
      raiseError(error);
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
