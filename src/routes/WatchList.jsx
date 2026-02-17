import MovieList from '../components/MovieList/MovieList';
import { useWLContext } from '../hooks/useWLContext';

function WatchList() {
  const { watchList, setWatchList } = useWLContext();
  return <MovieList watchList={watchList} movies={watchList} setWatchList={setWatchList} />;
}
export default WatchList;
