import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './features/movies/moviesSlice';
import selectedMoviesReducer from './features/selectedMovie/selectedMoviesSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    selectedMovies: selectedMoviesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
