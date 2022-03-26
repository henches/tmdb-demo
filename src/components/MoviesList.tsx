import * as React from 'react';
import MovieDTO from '../DTO/MovieResultDTO';
import Movie from './Movie';

type Props = {
  movies: MovieDTO[] | undefined;
}

export function MoviesList(props: Props) {
  return (
    <div className="movies-list movies-list-mq">
      {props.movies?.map(movie => <Movie key={movie.id} movie={movie}/>)}
    </div>
  );
}

export default MoviesList;
