import React from 'react';

interface Props {
  children: React.ReactNode;
}

export default function Box({ children }: Props) {
  return (
    <div className="bg-background-500 relative w-md overflow-hidden rounded-lg bg-amber-200">
      {children}
    </div>
  );
}
