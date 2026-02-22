import { createPortal } from 'react-dom';
import style from './MovieModal.module.css';
import { useLocation, useNavigate, useParams } from 'react-router';
import { DEFAULT_POSTER, getMoviePoster } from '../../utils/moviePoster';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { movieToggled, selectIsInWatchlist } from '../../store/watchlistSlice';

export default function MovieModal() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const { data } = useSelector((state) => state.movies);

  const movie = data.find((m) => m.id === Number(id));

  const hasHistory = location.state?.backgroundLocation;
  const parentPath = location.pathname.replace(/\/movie\/\d+.*$/, '') || '/';
  const onClose = () => (hasHistory ? navigate(-1) : navigate(parentPath));

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  if (!movie) {
    return createPortal(
      <div className={style.overlay} onClick={handleOverlayClick}>
        <div className={style.modal}>
          <button className={style.closeButton} onClick={onClose}>
            X
          </button>
          <div className={style.content}>
            <h2>Movie not found</h2>
            <p>The movie you&apos;re looking for doesn&apos;t exist or may have been removed.</p>
          </div>
        </div>
      </div>,
      document.body
    );
  }

  return (
    <MovieModalContent movie={movie} onClose={onClose} handleOverlayClick={handleOverlayClick} />
  );
}

function MovieModalContent({ movie, onClose, handleOverlayClick }) {
  const dispatch = useDispatch();

  const isInWatchList = useSelector(selectIsInWatchlist(movie.id));
  const posterURL = getMoviePoster(movie.id);

  return createPortal(
    <div className={style.overlay} onClick={handleOverlayClick}>
      <div className={style.modal}>
        <button className={style.closeButton} onClick={onClose}>
          X
        </button>
        <div className={style.inner}>
          <img className={style.poster} src={posterURL ? posterURL : DEFAULT_POSTER}></img>
          <div className={style.content}>
            <h2 className={style.title}>{movie?.title}</h2>
            <div className={style.meta}>
              <span className={style.genre}>{movie.genre}</span>
              <span className={style.rating}>{movie.rating}</span>
            </div>
            <p className={style.description}>
              No description available for <em>{movie.title}</em> yet.
            </p>
            {isInWatchList ? (
              <button
                className={`${style.watchListButton} ${style.removeButton}`}
                onClick={() => dispatch(movieToggled(movie))}
              >
                Remove from Watchlist
              </button>
            ) : (
              <button
                className={`${style.watchListButton} ${style.addButton}`}
                onClick={() => dispatch(movieToggled(movie))}
              >
                Add to Watchlist
              </button>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
