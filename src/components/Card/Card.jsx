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
    <div key={movie.id} className="movie-card">
      <img className="movie-image" src={posterURL ? posterURL : defaultURL}></img>
      <h3 className="movie-title">{movie.title}</h3>
      <div className="movie-details">
        <p className="movie-genre">{movie.genre}</p>
        <p className="movie-rating">{movie.rating}</p>
      </div>
      <div className="movie-watchlist">
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
