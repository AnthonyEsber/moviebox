import { useDispatch, useSelector } from 'react-redux';
import MovieList from '../components/MovieList/MovieList';
import empty from '../styles/EmptyState.module.css';
import styles from '../styles/WatchList.module.css';
import { Link } from 'react-router';
import { corruptedMsgDismissed, watchListCleared } from '../store/watchlistSlice';

function WatchList() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.watchlist.data);
  const wasCorrupted = useSelector((state) => state.watchlist.wasCorrupted);

  if (wasCorrupted) {
    return (
      <div className={empty.emptyState}>
        <p>Your watchlist data was corrupted</p>
        <p>
          Invalid data was detected in your saved watchlist. It has been auto-cleared to prevent
          issues.
        </p>
        <button className={empty.emptyAction} onClick={dispatch(corruptedMsgDismissed())}>
          OK
        </button>
      </div>
    );
  }
  if (data.length === 0) {
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
  return (
    <div>
      <button
        className={styles.clearButton}
        onClick={() => {
          if (window.confirm('Clear your entire watchlist?')) {
            dispatch(watchListCleared());
          }
        }}
      >
        Clear Watchlist
      </button>
      <MovieList movies={data} />
    </div>
  );
}
export default WatchList;
