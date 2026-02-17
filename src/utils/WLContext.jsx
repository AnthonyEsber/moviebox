import { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const WLContext = createContext();

export function WLProvider({ children }) {
  const [watchList, setWatchList] = useLocalStorage('watchList', []);

  return <WLContext value={{ watchList, setWatchList }}>{children}</WLContext>;
}
