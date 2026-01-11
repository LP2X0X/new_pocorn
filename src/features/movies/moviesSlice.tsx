import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchMovies = createAsyncThunk(`movies/fetchMovies`);

const moviesSlice = createSlice({
  name: 'movies',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(fetchMovies.fulfilled);
  },
});
