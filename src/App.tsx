import MoviesList from './features/movies/MoviesList';
import WatchedMoviesOverview from './features/movies/WatchedMoviesOverview';
import Box from './ui/Box';
import Header from './ui/Header';
import StatusMessage from './ui/StatusMessage';

function App() {
  return (
    <div className="bg-background-900 flex h-screen flex-col gap-4 p-5">
      <Header></Header>
      <main className="flex h-full min-h-0 justify-center gap-4">
        <Box>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <StatusMessage />
          </div>
          <MoviesList />
        </Box>
        <Box>
          <WatchedMoviesOverview />
        </Box>
      </main>
    </div>
  );
}

export default App;
