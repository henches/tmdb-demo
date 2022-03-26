import MovieResultDTO from "./MovieResultDTO";

type MoviesDTO = {
    page: number,
    results: MovieResultDTO[],
    total_results: number,
    total_pages: number
};

export default MoviesDTO;