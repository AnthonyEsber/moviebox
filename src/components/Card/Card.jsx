function Card({ movie }) {
  const posterURL = '/images/' + movie.id + '.jpg';
  const defaultURL = '/images/default.jpg';
  return (
    <div key={movie.id} className="movie-card">
      <img className="movie-image" src={posterURL ? posterURL : defaultURL}></img>
      <h3 className="movie-title">{movie.title}</h3>
      <div className="movie-details">
        <p className="movie-genre">{movie.genre}</p>
        <p className="movie-rating">{movie.rating}</p>
      </div>
    </div>
  );
}

export default Card;
