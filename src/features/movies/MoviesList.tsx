import { useSelector } from 'react-redux';
import type { RootState } from '../../store';
import Movie from './Movie';

export default function MoviesList() {
  const { movies, status } = useSelector((state: RootState) => state.movies);

  if (status !== 'success') return;

  return (
    <ul className="h-full overflow-scroll py-2">
      {movies.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}
