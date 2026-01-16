import { useDispatch, useSelector } from 'react-redux';
import { type AppDispatch, type RootState } from '../../store';
import { resetSelectedMovieInfo } from './selectedMoviesSlice';

export default function SelectedMovie() {
  const {
    status,
    selectedMovieInfo: { id, poster },
    selectedMovieDetail,
  } = useSelector((state: RootState) => state.selectedMovies);

  const dispatch = useDispatch<AppDispatch>();

  if (!id || status !== 'success') return;

  return (
    <header className="bg-background-100 text-text relative grid grid-cols-[1fr_2.5fr] grid-rows-[1fr_2fr] gap-x-4 pr-7 text-sm">
      <img
        src={poster}
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = 'https://placehold.co/200x300?text=404';
        }}
        className="row-span-full columns-1 self-center"
      />
      <h3 className="row-1 columns-1 self-center text-2xl font-bold">
        {selectedMovieDetail.Title}
      </h3>
      <ul className="flex flex-col items-start justify-evenly">
        <li>
          <p>
            {selectedMovieDetail.Released} &middot;{' '}
            {selectedMovieDetail.Runtime}
          </p>
        </li>
        <li>
          <p>{selectedMovieDetail.Genre}</p>
        </li>
        <li>
          <p>
            <span>⭐</span> {selectedMovieDetail.imdbRating} IMDB Rating
          </p>
        </li>
      </ul>
      <button
        className="bg-primary-light absolute top-0 right-0 cursor-pointer rounded-bl-lg px-2 pb-1 text-center"
        onClick={() => dispatch(resetSelectedMovieInfo())}
      >
        &larr;
      </button>
    </header>
  );
}
