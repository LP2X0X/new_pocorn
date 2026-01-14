import { useEffect, useRef, useState } from 'react';
import useKey from '../../hooks/useKey';
import { useDispatch } from 'react-redux';
import { fetchMovies, reset } from './moviesSlice';
import type { AppDispatch } from '../../store';

export default function SearchBox() {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useKey({ key: 'Enter', action: clearAndFocusSearchBox });

  useEffect(() => {
    if (query === '') {
      dispatch(reset());
      return;
    }

    const promise = dispatch(fetchMovies(query));

    return () => promise.abort();
  }, [query, dispatch]);

  function clearAndFocusSearchBox(): void {
    if (document.activeElement === inputRef.current) return;

    setQuery('');
    inputRef.current?.focus();
  }

  return (
    <input
      className="bg-primary-light w-xs min-w-[150px] rounded-lg px-3 py-2 text-lg duration-150 ease-in-out focus:-translate-y-0.5 focus:shadow-lg/10 focus:outline-hidden"
      placeholder="Search movies..."
      ref={inputRef}
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
