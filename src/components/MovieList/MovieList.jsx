import Card from '../Card/Card';

export function MovieList({
  movies,
  filterTitle = null,
  selectedGenre = '',
  watchList,
  setWatchList,
}) {
  return (
    <div>
      {movies
        .filter((movie) => {
          const title = movie.title.toLowerCase() ?? '';
          const filter = (filterTitle ?? '').toLowerCase();

          const matchesTitle = title.includes(filter);
          const matchesGenre = selectedGenre === '' ? true : movie.genre === selectedGenre;

          return matchesTitle && matchesGenre;
        })
        .map((movie) => (
          <Card key={movie.id} movie={movie} watchList={watchList} setWatchList={setWatchList} />
        ))}
    </div>
  );
}

export default MovieList;
