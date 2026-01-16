import MoviesList from './features/movies/MoviesList';
import SelectedMovie from './features/selectedMovie/SelectedMovie';
import WatchedMoviesOverview from './features/watchedMovies/WatchedMoviesOverview';
import Box from './ui/Box';
import CenterContainer from './ui/CenterContainer';
import Header from './ui/Header';
import MovieStatusMessage from './features/movies/MovieStatusMessage';
import SelectedMovieStatusMessage from './features/selectedMovie/SelectedMovieStatusMessage';

function App() {
  return (
    <div className="bg-background-900 flex h-screen flex-col gap-4 p-5">
      <Header></Header>
      <main className="flex h-full min-h-0 justify-center gap-4">
        <Box>
          <CenterContainer>
            <MovieStatusMessage />
          </CenterContainer>
          <MoviesList />
        </Box>
        <Box>
          <CenterContainer>
            <SelectedMovieStatusMessage />
          </CenterContainer>
          <WatchedMoviesOverview />
          <SelectedMovie />
        </Box>
      </main>
    </div>
  );
}

export default App;
