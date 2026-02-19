import styles from './Card.module.css';
import { useLocation, useNavigate } from 'react-router';
import { DEFAULT_POSTER, getMoviePoster } from '../../utils/moviePoster';
import { useDispatch, useSelector } from 'react-redux';
import { movieToggled, selectIsInWatchlist } from '../../store/watchlistSlice';

function Card({ movie }) {
  const posterURL = getMoviePoster(movie.id);

  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useDispatch();

  const isInWatchList = useSelector(selectIsInWatchlist(movie.id));

  return (
    <>
      <div key={movie.id} className={styles.movieCard}>
        <div
          className={styles.movieCardInner}
          onClick={() =>
            navigate(`${location.pathname === '/' ? '' : location.pathname}/movie/${movie.id}`, {
              state: { backgroundLocation: location },
            })
          }
        >
          <img className={styles.movieImage} src={posterURL ? posterURL : DEFAULT_POSTER}></img>
          <div className={styles.movieTitle}>
            <h3>{movie.title}</h3>
          </div>
          <div className={styles.movieDetails}>
            <p className={styles.movieGenre}>{movie.genre}</p>
            <p className={styles.movieRating}>{movie.rating}</p>
          </div>
        </div>

        <div className={styles.movieWatchList}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              dispatch(movieToggled(movie));
            }}
          >
            {isInWatchList ? 'Added to Watchlist' : 'Add to Watchlist'}
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
