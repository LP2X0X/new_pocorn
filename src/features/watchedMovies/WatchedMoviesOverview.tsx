import { useSelector } from 'react-redux';
import type { RootState } from '../../store';

export default function WatchedMoviesOverview() {
  const {
    selectedMovieInfo: { id },
  } = useSelector((state: RootState) => state.selectedMovies);

  if (!id)
    return (
      <section className="text-text bg-background-100 flex flex-col gap-4 rounded-lg px-7 py-4 shadow-xl/20">
        <h2 className="self-center text-xl font-bold uppercase">
          Watched Movies
        </h2>
        <ul className="flex grow justify-between">
          <li>
            <p>
              <span>#️⃣</span> X movies
            </p>
          </li>
          <li>
            <p>
              <span>⭐️</span> X
            </p>
          </li>
          <li>
            <p>
              <span>🌟</span> X
            </p>
          </li>
          <li>
            <p>
              <span>⏳</span> X mins
            </p>
          </li>
        </ul>
      </section>
    );
}
