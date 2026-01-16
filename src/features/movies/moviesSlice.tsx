import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getMovies } from '../services/apiMovies';

export type Movie = {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
};

export type Status = 'idle' | 'loading' | 'success' | 'error';

type State = { movies: Array<Movie>; status: Status; error: any };

export const fetchMovies = createAsyncThunk(
  `movies/fetchMovies`,
  async (query: string, thunkAPI) => {
    const data = await getMovies(query, thunkAPI.signal);

    return data;
  },
);

const initialState: State = {
  movies: [],
  status: 'idle',
  error: {},
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    reset: (state) => {
      state.status = 'idle';
      state.movies = [];
      state.error = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movies = action.payload.Search;
      state.status = 'success';
    });
    builder.addCase(fetchMovies.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchMovies.rejected, (state, action) => {
      if (action.meta.aborted) {
        console.log(`Request cancelled!`);
      } else {
        state.status = 'error';
        state.error = action.error.message;
      }
    });
  },
});

export default moviesSlice.reducer;
export const { reset } = moviesSlice.actions;
