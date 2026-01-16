import { useSelector } from 'react-redux';
import type { RootState } from '../../store';

export default function SelectedMovieStatusMessage() {
  const { status } = useSelector((state: RootState) => state.selectedMovies);

  if (status === 'loading') {
    return (
      <i className="text-text text-2xl font-semibold uppercase">Loading...</i>
    );
  }

  if (status === 'error') {
    <p className="text-text text-2xl font-semibold">
      &#9940;️ Can't get movie details...
    </p>;
  }

  return;
}
