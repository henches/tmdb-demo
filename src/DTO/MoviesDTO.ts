import MovieDTO from "./MovieResultDTO";

type MoviesDTO = {
    page: number,
    results: MovieDTO[],
    total_results: number,
    total_pages: number
};

export default MoviesDTO;