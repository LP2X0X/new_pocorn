import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './features/movies/moviesSlice';
import watchedMoviesReducer from './features/watchedMovies/watchedMoviesSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    watchedMovies: watchedMoviesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
