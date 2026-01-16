import MoviesList from './features/movies/MoviesList';
import SelectedMovie from './features/watchedMovies/SelectedMovie';
import WatchedMoviesOverview from './features/watchedMovies/WatchedMoviesOverview';
import Box from './ui/Box';
import CenterContainer from './ui/CenterContainer';
import Header from './ui/Header';
import StatusMessage from './ui/StatusMessage';

function App() {
  return (
    <div className="bg-background-900 flex h-screen flex-col gap-4 p-5">
      <Header></Header>
      <main className="flex h-full min-h-0 justify-center gap-4">
        <Box>
          <CenterContainer>
            <StatusMessage />
          </CenterContainer>
          <MoviesList />
        </Box>
        <Box>
          <WatchedMoviesOverview />
          <SelectedMovie />
        </Box>
      </main>
    </div>
  );
}

export default App;
