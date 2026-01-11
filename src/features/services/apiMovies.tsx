const PUBLIC_KEY = '4869cc13';

async function getMovies(query: string, controller: AbortController) {
  const res = await fetch(
    `http://www.omdbapi.com/?apikey=${PUBLIC_KEY}&s=${query}`,
    { signal: controller.signal },
  );

  if (!res.ok) {
    throw new Error('Searching movies failed...');
  }

  const data = await res.json();

  return data;
}
