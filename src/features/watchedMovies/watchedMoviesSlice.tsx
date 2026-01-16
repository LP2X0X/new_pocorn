import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getMovieDetail } from '../services/apiMovies';

interface WatchedMovie {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: [
    {
      Source: string;
      Value: string;
    },
  ];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

type State = {
  selectedMovieInfo: { id: string; poster: string };
  selectedMovieDetail: WatchedMovie;
};

const initialState: State = {
  selectedMovieInfo: { id: '', poster: '' },
  selectedMovieDetail: {} as WatchedMovie,
};

export const fetchMovieDetail = createAsyncThunk(
  'watchedMovies/fetchMovieDetail',
  async (selectedMovieId: string, thunkAPI) => {
    const movieDetail = getMovieDetail(selectedMovieId, thunkAPI.signal);

    return movieDetail;
  },
);

const watchedMoviesSlice = createSlice({
  name: 'watchedMovies',
  initialState,
  reducers: {
    setSelectedMovieInfo: (state, action) => {
      state.selectedMovieInfo = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovieDetail.fulfilled, (state, action) => {
      state.selectedMovieDetail = action.payload;
    });
  },
});

export default watchedMoviesSlice.reducer;
export const { setSelectedMovieInfo } = watchedMoviesSlice.actions;
