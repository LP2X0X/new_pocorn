import { useEffect, useRef, useState } from 'react';
import useKey from '../../hooks/useKey';

export default function SearchBox() {
  const [query, setQuery] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useKey({ key: 'Enter', action: setQuery });

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
