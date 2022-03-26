import * as React from 'react';
import MovieDTO from '../DTO/MovieResultDTO';
import { useStateRef } from '../utils/utils';
import Movie from './Movie';

const MOVIE_WIDTH = 8;
const HTML_CAROUSEL_TRACK = ".movies-carousel-track"

type Props = {
  movies: MovieDTO[] | undefined;
}

export function MoviesCarousel(props: Props) {
  const [index, setIndex] = React.useState<number>(0);

  const [moviesCarouselRef, setMoviesCarousel] = useStateRef<HTMLElement>(document.getElementById('root')!); // Could'nt find another way to silence Typescript (null or undefined did'nt)
  const [initialPositionRef, setInitialPosition] = useStateRef(0);
  const [movingRef, setMoving] = useStateRef<boolean>(false);
  const [transformRef, setTransform] = useStateRef<number>(0);

  React.useEffect(() => {
    setMoviesCarousel(document.querySelector<HTMLElement>(HTML_CAROUSEL_TRACK)!);
  }, [setMoviesCarousel]);

  const gestureStart = React.useCallback((e: any) => {
    setInitialPosition(e.pageX);
    setMoving(true);
    if (moviesCarouselRef.current) {
      const transformMatrix = window.getComputedStyle(moviesCarouselRef.current).getPropertyValue('transform');
      if (transformMatrix !== 'none') {
        setTransform(parseInt(transformMatrix.split(',')[4].trim()));
      }
    } else {
      console.error("ERROR : Unable to get HTML Element : ", HTML_CAROUSEL_TRACK)
    }
  }, [moviesCarouselRef, setInitialPosition, setMoving, setTransform]);
  
  const gestureMove = React.useCallback((e: any) => {
    if (movingRef.current) {
      const currentPosition = e.pageX;
      const diff = currentPosition - initialPositionRef.current;
      moviesCarouselRef.current!.style.transform = `translateX(${transformRef.current + diff}px)`;
    }
  }, [moviesCarouselRef, initialPositionRef, transformRef, movingRef]);
  
  const gestureEnd = React.useCallback((e: any) => {
    setMoving(false);
  }, [setMoving]);

  React.useEffect(() => {
    if (window.PointerEvent) {
      window.addEventListener('pointerdown', gestureStart);
      window.addEventListener('pointermove', gestureMove);
      window.addEventListener('pointerup', gestureEnd);  
    } else {
      window.addEventListener('touchstart', gestureStart);
      window.addEventListener('touchmove', gestureMove);
      window.addEventListener('touchend', gestureEnd);  
    }
  }, [gestureMove, gestureStart, gestureEnd]);


  // TODO : for a better user experience, disable right button when the end of the carousel is reached on the right-hand side 
  return (
    <div className="best-movies">
      <button className="button-carousel" disabled={index === 0} onClick={() => setIndex(index - 1)}><img alt="previous-arrow" src={require("../images/sliderpreviousarrow.svg").default}/></button>
      <div className="movies-carousel">
        <div className="movies-carousel-track movies-carousel-track-mq" style={{transform:`translateX(${-index * MOVIE_WIDTH}rem)`}}>
          {props.movies?.map(movie => <Movie key={movie.id} movie={movie}/>)}
        </div>
      </div>
      <button className="button-carousel" disabled={index + 3 > (props.movies ? props.movies.length : 0)} onClick={() => setIndex(index + 1)}><img alt="next-arrow" src={require("../images/slidernextarrow.svg").default}/></button>
    </div>
  );
}

export default MoviesCarousel;
