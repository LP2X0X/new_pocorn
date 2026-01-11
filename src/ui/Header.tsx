import React from 'react';
import Logo from './Logo';
import SearchBox from '../features/movies/SearchBox';
import FoundResults from './FoundResults';

export default function Header() {
  return (
    <header className="bg-primary text-text flex items-center justify-between rounded-lg px-7 py-3">
      <Logo />
      <SearchBox />
      <FoundResults />
    </header>
  );
}
