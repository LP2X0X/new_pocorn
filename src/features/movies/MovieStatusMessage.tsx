import { useSelector } from 'react-redux';
import type { RootState } from '../../store';

export default function MovieStatusMessage() {
  const { status, error } = useSelector((state: RootState) => state.movies);

  if (status === 'loading') {
    return (
      <i className="text-text text-2xl font-semibold uppercase">Loading...</i>
    );
  }

  if (status === 'error') {
    if (error === 'Movies not found') {
      return (
        <p className="text-text text-2xl font-semibold">
          &#9940;️ Movies not found
        </p>
      );
    } else {
      return (
        <p className="text-text text-2xl font-semibold">&#9940; {error}</p>
      );
    }
  }

  return;
}
