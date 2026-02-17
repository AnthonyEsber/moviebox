import { createContext } from 'react';
import { useJsonLoad } from '../hooks/useJsonLoad';

export const MovieContext = createContext();

export function MovieProvider({ children }) {
  const { data: movies, loading, error } = useJsonLoad();

  return <MovieContext value={{ movies, loading, error }}>{children}</MovieContext>;
}
