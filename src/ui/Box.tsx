import React from 'react';

interface Props {
  children: React.ReactNode;
}

export default function Box({ children }: Props) {
  return (
    <div className="bg-background-500 relative h-full w-md rounded-lg bg-amber-200">
      {children}
    </div>
  );
}
