import get from './backend';
import GenresDTO from './DTO/GenresDTO';
import MoviesDTO from './DTO/MoviesDTO';

export function getTopRated(): Promise<MoviesDTO> {
  return get('discover/movie');
}

export function getAll(page: number, genreId: number | undefined): Promise<MoviesDTO> {
  return get('discover/movie', "page=" + page + (genreId ? "&with_genres=" + genreId : ""));
}

export function getGenres() : Promise<GenresDTO> {
  return get('/genre/movie/list')
} 
