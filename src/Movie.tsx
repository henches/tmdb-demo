import * as React from 'react';
import './App.css';
import { getFullPosterPath } from './backend';
import MovieResultDTO from './DTO/MovieResultDTO';

type Props = {
  movie: MovieResultDTO;
}

export function Movie(props: Props) {
  return (
    <div className="movie">
        <img className="movie-image" alt={props.movie.original_title} src={getFullPosterPath(props.movie.poster_path)}/>
        <h1 className="movie-title" >{props.movie.original_title}</h1>
        <h1 className="movie-year" >{props.movie.release_date.substring(0, 4)}</h1>
    </div>
  );
}

export default Movie;
