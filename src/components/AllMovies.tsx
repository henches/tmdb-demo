import * as React from 'react';
import * as backendService from '../service/backendService';
import GenreDTO from '../DTO/GenreDTO';
import MoviesDTO from '../DTO/MoviesDTO';
import MoviesList from './MoviesList';
import Pagination from './Pagination';
import { raiseError } from '../utils/utils';

const MAX_PAGES = 500;

export function AllMovies() {
  const [movies, setMovies] = React.useState<MoviesDTO>();
  const [page, setPage] = React.useState<number>(1);
  const [genres, setGenres] = React.useState<GenreDTO[]>();
  const [selectedGenreId, setSelectedGenreId] = React.useState<number>();

  React.useEffect(() => {
    backendService.getGenres() 
    .then(genresContainer => {
      setGenres(genresContainer.genres);
    })
    .catch(error => {
      raiseError(error);
    })  
  }, []);

  React.useEffect(() => {
    backendService.getAll(page, selectedGenreId) 
    .then(movies => {
      setMovies(movies);
    })
    .catch(error => {
      raiseError(error);
    })  
  }, [page, selectedGenreId]);

  function goPageNumber(page: number) {
    setPage(page)
  }

  function selectGenre(event: any) {
    setPage(1);  // When a new genre is selected, the pagination resets to the first page
    setSelectedGenreId(event.target.value);
  }

  return (
    <div>
      <h1 className="title">Tous les films</h1>
      <div className="all-movies-container">
        <div className="movies-filters">
          <label className="filter-label">Filtrer par :</label>
          <select className="genre-input" onChange={selectGenre}>
              <option value={undefined}>Tous les genres</option>  
              {genres?.map(genre => <option key={genre.id} value={genre.id}>{genre.name}</option>)}
          </select>
        </div>
        <MoviesList movies={movies?.results}/>
        <Pagination maxPages={MAX_PAGES} totalPages={movies?.total_pages!} pageNumber={page} goPageNumber={goPageNumber}/>
      </div>
    </div>
  );
}

export default AllMovies;
