import MovieList from '../components/MovieList/MovieList';
import { useWLContext } from '../hooks/useWLContext';
import empty from '../styles/EmptyState.module.css';
import { Link } from 'react-router';

function WatchList() {
  const { watchList } = useWLContext();
  if (watchList.length === 0) {
    return (
      <div className={empty.emptyState}>
        <p>Your watchlist is empty</p>
        <p>Start adding movies to keep track of what you want to watch.</p>
        <Link to="/" className={empty.emptyAction}>
          Browse Movies
        </Link>
      </div>
    );
  }
  return <MovieList movies={watchList} />;
}
export default WatchList;
