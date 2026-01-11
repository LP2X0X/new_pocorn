import React from 'react';

export default function SearchBox() {
  return (
    <input
      className="bg-primary-light w-xs min-w-[150px] rounded-lg px-3 py-2 text-lg duration-150 ease-in-out focus:-translate-y-0.5 focus:shadow-lg/10 focus:outline-hidden"
      placeholder="Search movies..."
    />
  );
}
