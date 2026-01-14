import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const PUBLIC_KEY = '4869cc13';

type Movie = {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
};

type Status = 'idle' | 'loading' | 'success' | 'error';

export const fetchMovies = createAsyncThunk(
  `movies/fetchMovies`,
  async (query: string, thunkAPI) => {
    const res = await fetch(
      `http://www.omdbapi.com/?apikey=${PUBLIC_KEY}&s=${query}`,
      { signal: thunkAPI.signal },
    );

    if (!res.ok) {
      throw new Error('Failed when fetching movies data...');
    }

    const data = await res.json();

    if (data.Response.toLowerCase() === 'false') {
      throw new Error('Movies not found');
    }

    return data;
  },
);

const initialState: { movies: Array<Movie>; status: Status; error: any } = {
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
      state.status = 'idle';
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
