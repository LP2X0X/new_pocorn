import { useSelector } from 'react-redux';
import type { RootState } from '../../store';

export default function SelectedMovie() {
  const {
    selectedMovieInfo: { id, poster },
    selectedMovieDetail,
  } = useSelector((state: RootState) => state.watchedMovies);

  if (!id) return;

  return (
    <div>
      <header>
        <img
          src={poster}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = 'https://placehold.co/200x300?text=404';
          }}
        />
      </header>
    </div>
  );
}
