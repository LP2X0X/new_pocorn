import { useEffect } from 'react';

export default function useKey({
  key,
  action,
}: {
  key: string;
  action: (query: string) => void;
}) {
  useEffect(
    function () {
      function callback(e: KeyboardEvent) {
        console.log(e);
        if (e.code.toLowerCase() === key.toLowerCase()) action('');
      }

      document.addEventListener('keydown', callback);

      return () => document.removeEventListener('keydown', callback);
    },
    [key, action],
  );
}
