import GenresDTO from '../DTO/GenresDTO';
import MoviesDTO from '../DTO/MoviesDTO';
import get from './backend';

export function getAll(page: number, genreId?: number): Promise<MoviesDTO> {
  return get('discover/movie', "page=" + page + (genreId ? "&with_genres=" + genreId : "")); // TODO this is ugly : replace "&<attributes> with an object"
}

export function getGenres() : Promise<GenresDTO> {
  return get('/genre/movie/list')
} 
