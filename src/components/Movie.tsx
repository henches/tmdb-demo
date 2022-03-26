import * as React from 'react';
import MovieDTO from '../DTO/MovieResultDTO';
import { getFullPosterPath } from '../service/backend';

type Props = {
  movie: MovieDTO;
}

export function Movie(props: Props) {
  return (
    <div className="movie">
        <img className="movie-image" alt={props.movie.original_title} src={getFullPosterPath(props.movie.poster_path)}/>
        <h1 className="movie-title" >{props.movie.original_title.substring(0, 16)}</h1>
        <h1 className="movie-year" >{props.movie.release_date.substring(0, 4)}</h1>
    </div>
  );
}

export default Movie;
