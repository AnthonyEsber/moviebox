import { useContext } from 'react';
import { MovieContext } from '../utils/MovieContext';

export function useMoviesContext() {
  const context = useContext(MovieContext);

  if (!context) {
    throw new Error('hook must be used within the provider');
  }

  return context;
}
