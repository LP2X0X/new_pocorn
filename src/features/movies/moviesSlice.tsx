import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const PUBLIC_KEY = '4869cc13';

export const fetchMovies = createAsyncThunk(
  `movies/fetchMovies`,
  async (query: string, thunkAPI) => {
    const res = await fetch(
      `http://www.omdbapi.com/?apikey=${PUBLIC_KEY}&s=${query}`,
    );

    if (!res.ok) {
      throw new Error('Failed when fetching movies data...');
    }

    const movies = await res.json();
    return movies;
  },
);

const moviesSlice = createSlice({
  name: 'movies',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      console.log(action.payload);
    });
    builder.addCase(fetchMovies.pending, (state) => {});
    builder.addCase(fetchMovies.rejected, (state) => {});
  },
});

export default moviesSlice.reducer;
