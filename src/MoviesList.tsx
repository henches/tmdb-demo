import * as React from 'react';
import './App.css';
import MovieResultDTO from './DTO/MovieResultDTO';
import Movie from './Movie';

type Props = {
  movies: MovieResultDTO[] | undefined;
}

export function MoviesList(props: Props) {
  return (
    <div className="movies-list movies-list-mq">
      {props.movies?.map(movie => <Movie movie={movie}/>)}
    </div>
  );
}

export default MoviesList;
