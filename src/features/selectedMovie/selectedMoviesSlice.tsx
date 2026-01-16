import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getMovieDetail } from '../services/apiMovies';
import { type Status } from '../movies/moviesSlice';

interface SelectedMovie {
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
  status: Status;
  selectedMovieInfo: { id: string; poster: string };
  selectedMovieDetail: SelectedMovie;
};

const initialState: State = {
  status: 'idle',
  selectedMovieInfo: { id: '', poster: '' },
  selectedMovieDetail: {} as SelectedMovie,
};

export const fetchMovieDetail = createAsyncThunk(
  'watchedMovies/fetchMovieDetail',
  async (selectedMovieId: string, thunkAPI) => {
    const movieDetail = getMovieDetail(selectedMovieId, thunkAPI.signal);

    return movieDetail;
  },
);

const selectedMoviesSlice = createSlice({
  name: 'watchedMovies',
  initialState,
  reducers: {
    setSelectedMovieInfo: (state, action) => {
      state.selectedMovieInfo = action.payload;
    },
    resetSelectedMovieInfo: (state) => {
      state.selectedMovieInfo = initialState.selectedMovieInfo;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovieDetail.fulfilled, (state, action) => {
      state.status = 'success';
      state.selectedMovieDetail = action.payload;
    });
    builder.addCase(fetchMovieDetail.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchMovieDetail.rejected, (state, action) => {
      state.status = 'error';
      console.log(action.payload);
    });
  },
});

export default selectedMoviesSlice.reducer;
export const { setSelectedMovieInfo, resetSelectedMovieInfo } =
  selectedMoviesSlice.actions;
