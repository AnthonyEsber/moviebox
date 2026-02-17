import { useContext } from 'react';
import { WLContext } from '../utils/WLContext';

export function useWLContext() {
  const context = useContext(WLContext);

  if (!context) {
    throw new Error('useWLContext must be used inside WLProvider!');
  }

  return context;
}
