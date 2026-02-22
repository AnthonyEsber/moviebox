import { createListenerMiddleware } from '@reduxjs/toolkit';
import { movieToggled } from './watchlistSlice';

export const watchlistListener = createListenerMiddleware();

watchlistListener.startListening({
  actionCreator: movieToggled,
  effect: (action, listenerApi) => {
    const state = listenerApi.getState();
    localStorage.setItem('watchList', JSON.stringify(state.watchlist.data));
  },
});
