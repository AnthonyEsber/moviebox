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

function loadInitialState() {
  try {
    const raw = localStorage.getItem('watchList');

    if (raw === null) return { data: [], wasCorrupted: false };

    const parsed = JSON.parse(raw);

    if (!isValidWatchList(parsed)) {
      console.log('watchlist data corrupted! cleaning...');
      localStorage.removeItem('watchList');
      return { data: [], wasCorrupted: true };
    }

    return { data: parsed, wasCorrupted: false };
  } catch (err) {
    console.log(err);
    localStorage.removeItem('watchList');
    return { data: [], wasCorrupted: true };
  }
}

const watchlistSlice = createSlice({
  name: 'watchlist',
  initialState: loadInitialState(),
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
      state.wasCorrupted = false;
    },
    corruptedMsgDismissed: (state) => {
      state.wasCorrupted = false;
    },
  },
});

export const { movieAdded, movieRemoved, movieToggled, watchListCleared, corruptedMsgDismissed } =
  watchlistSlice.actions;

export default watchlistSlice.reducer;

export const selectIsInWatchlist = (movieId) => (state) =>
  state.watchlist.data.some((data) => data.id === movieId);
