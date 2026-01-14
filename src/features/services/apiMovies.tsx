const PUBLIC_KEY = '4869cc13';

export async function getMovies(query: string, signal: AbortSignal) {
  const res = await fetch(
    `http://www.omdbapi.com/?apikey=${PUBLIC_KEY}&s=${query}`,
    { signal: signal },
  );

  if (!res.ok) {
    throw new Error('Failed when fetching movies data...');
  }

  const movies = await res.json();

  if (movies.Response.toLowerCase() === 'false') {
    throw new Error('Movies not found');
  }

  return movies;
}
