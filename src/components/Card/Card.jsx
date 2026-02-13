import styles from './Card.module.css';

function Card({ movie, watchList, setWatchList }) {
  const posterURL = '/images/' + movie.id + '.jpg';
  const defaultURL = '/images/default.jpg';

  const isInWatchList = watchList.some((item) => item.id === movie.id);

  const findWLIndex = watchList.findIndex((item) => item.id === movie.id);

  const handleWLRemoval = (watchList) => {
    const tempCopy = [...watchList];
    tempCopy.splice(findWLIndex, 1);
    return tempCopy;
  };

  return (
    <div key={movie.id} className={styles.movieCard}>
      <img className={styles.movieImage} src={posterURL ? posterURL : defaultURL}></img>
      <div className={styles.movieTitle}>
        <h3>{movie.title}</h3>
      </div>
      <div className={styles.movieDetails}>
        <p className={styles.movieGenre}>{movie.genre}</p>
        <p className={styles.movieRating}>{movie.rating}</p>
      </div>
      <div className={styles.movieWatchList}>
        {isInWatchList ? (
          <button onClick={() => setWatchList((watchList) => handleWLRemoval(watchList))}>
            Added to Watchlist
          </button>
        ) : (
          <button onClick={() => setWatchList((watchList) => [...watchList, movie])}>
            Add to Watchlist
          </button>
        )}
      </div>
    </div>
  );
}

export default Card;
