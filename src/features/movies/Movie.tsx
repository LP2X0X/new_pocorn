import React from 'react';
import type { Movie } from './moviesSlice';

type MovieProps = {
  movie: Movie;
};

export default function Movie({ movie }: MovieProps) {
  return (
    <li className="grid grid-cols-[1fr_2fr]">
      <img
        src={movie.Poster}
        alt={`${movie.Title} Movie Poster`}
        className="row-span-full h-auto max-w-full"
      />
      <h3>{movie.Title}</h3>
      <p>
        <span>&#128197;</span>
        {movie.Year}
      </p>
    </li>
  );
}
