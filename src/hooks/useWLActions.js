import { useWLContext } from './useWLContext';

export function useWLActions(movie) {
  const { watchList, setWatchList } = useWLContext();
  const isInWatchList = watchList.some((item) => item.id === movie.id);

  const addToWatchList = () => {
    setWatchList((watchList) => [...watchList, movie]);
  };

  const removeFromWatchList = () => {
    setWatchList((watchList) => watchList.filter((item) => item.id !== movie.id));
  };

  const toggleWatchList = () => {
    isInWatchList ? removeFromWatchList() : addToWatchList();
  };

  return { isInWatchList, addToWatchList, removeFromWatchList, toggleWatchList };
}
