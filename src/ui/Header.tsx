import React from 'react';
import Logo from './Logo';
import SearchBox from '../features/movies/SearchBox';

export default function Header() {
  return (
    <header className="bg-primary flex rounded-lg px-3 py-2">
      <Logo />
      <SearchBox />
    </header>
  );
}
