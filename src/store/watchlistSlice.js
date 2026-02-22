import { createSlice } from '@reduxjs/toolkit';

function isValidWatchList(value) {
  if (!Array.isArray(value)) return false;

  return value.every(
    (item) =>
      item !== null &&
      typeof item === 'object' &&
      typeof item.id === 'number' &&
      typeof item.title === 'string' &&
      typeof item.genre === 'string' &&
      typeof item.rating === 'string'
  );
}

function loadInitialData() {
  try {
    const raw = localStorage.getItem('watchList');

    if (raw === null) return [];

    const parsed = JSON.parse(raw);

    if (!isValidWatchList(parsed)) {
      console.log('watchlist data corrupted! cleaning...');
      localStorage.removeItem('watchList');
      return [];
    }

    return parsed;
  } catch (err) {
    console.log(err);
    localStorage.removeItem('watchList');
    return [];
  }
}

const watchlistSlice = createSlice({
  name: 'watchlist',
  initialState: { data: loadInitialData() },
  reducers: {
    movieAdded: (state, action) => {
      const movie = action.payload;

      if (!state.data.some((data) => data.id === movie.id)) {
        state.data.push(movie);
      }
    },
    movieRemoved: (state, action) => {
      state.data = state.data.filter((data) => data.id !== action.payload);
    },
    movieToggled: (state, action) => {
      const movie = action.payload;
      const index = state.data.findIndex((data) => data.id === movie.id);
      if (index !== -1) {
        state.data.splice(index, 1);
      } else {
        state.data.push(movie);
      }
    },
    watchListCleared: (state) => {
      state.data = [];
    },
  },
});

export const { movieAdded, movieRemoved, movieToggled, watchListCleared } = watchlistSlice.actions;

export default watchlistSlice.reducer;

export const selectIsInWatchlist = (movieId) => (state) =>
  state.watchlist.data.some((data) => data.id === movieId);
