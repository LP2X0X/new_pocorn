import type { Movie } from './moviesSlice';

type MovieProps = {
  movie: Movie;
};

export default function Movie({ movie }: MovieProps) {
  return (
    <li className="text-text first:border-t-background-100 border-b-background-100 grid grid-cols-[1fr_3fr] grid-rows-2 gap-x-5 gap-y-5 border-b px-3 py-2 first:border-t">
      <img
        src={movie.Poster}
        alt={`${movie.Title} Movie Poster`}
        className="row-span-full h-auto max-w-full"
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
