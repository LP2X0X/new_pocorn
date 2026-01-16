import React from 'react';

interface Props {
  children: React.ReactNode;
}

export default function Box({ children }: Props) {
  return (
    <article className="bg-background-500 relative w-[45%] overflow-hidden rounded-lg">
      {children}
    </article>
  );
}
