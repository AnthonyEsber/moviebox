import MovieList from '../components/MovieList/MovieList';
import { useWLContext } from '../hooks/useWLContext';

function WatchList() {
  const { watchList } = useWLContext();
  return <MovieList movies={watchList} />;
}
export default WatchList;
