import { useDispatch } from 'react-redux';
import type { Movie } from './moviesSlice';
import {
  fetchMovieDetail,
  setSelectedMovieInfo,
} from '../watchedMovies/watchedMoviesSlice';
import type { AppDispatch } from '../../store';

type MovieProps = {
  movie: Movie;
};

export default function Movie({ movie }: MovieProps) {
  const dispatch = useDispatch<AppDispatch>();

  async function handleClick() {
    dispatch(fetchMovieDetail(movie.imdbID));
    dispatch(setSelectedMovieInfo({ id: movie.imdbID, poster: movie.Poster }));
  }

  return (
    <li
      className="text-text first:border-t-background-100 border-b-background-100 hover:bg-background-100 grid grid-cols-[1fr_3fr] grid-rows-2 gap-x-5 gap-y-5 border-b px-3 py-2 first:border-t hover:cursor-pointer"
      onClick={handleClick}
    >
      <img
        src={movie.Poster}
        alt={`${movie.Title} Movie Poster`}
        className="row-span-full h-auto max-w-full justify-self-center"
        onError={(e) => {
          e.currentTarget.onerror = null; // Prevent infinite loop if fallback image also failed
          e.currentTarget.src = 'https://placehold.co/200x300?text=404';
        }}
      />
      <h3 className="col-2 row-1 self-end text-xl font-semibold">
        {movie.Title}
      </h3>
      <p className="col-2 row-2">
        <span>&#128197; </span>
        {movie.Year}
      </p>
    </li>
  );
}
