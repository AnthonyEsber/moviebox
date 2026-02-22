import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './movieSlice';
import watchlistReducer from './watchlistSlice';
import { watchlistListener } from './wMiddleware';

export const store = configureStore({
  reducer: {
    movies: movieReducer,
    watchlist: watchlistReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(watchlistListener.middleware),
});
