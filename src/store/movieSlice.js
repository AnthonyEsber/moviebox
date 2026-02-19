import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  loading: false,
  error: null,
  search: '',
};

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  const response = await fetch('/json/movies.json');
  const data = await response.json();
  return data;
});

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = 'An error occured.' + action.error.message;
      });
  },
});

export const { setSearch } = moviesSlice.actions;

export default moviesSlice.reducer;
