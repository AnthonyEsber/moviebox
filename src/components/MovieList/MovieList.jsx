import Card from '../Card/Card';
import styles from './MovieList.module.css';

export function MovieList({ movies, filterTitle = null, selectedGenre = '', sortBy = 'default' }) {
  const getSortedMovies = (movies) => {
    const sorted = [...movies];
    if (sortBy === 'rating') {
      sorted.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
    } else if (sortBy === 'alphabetical') {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    }
    return sorted;
  };
  return (
    <div className={styles.movieGrid}>
      {getSortedMovies(
        movies.filter((movie) => {
          const title = movie.title.toLowerCase() ?? '';
          const filter = (filterTitle ?? '').toLowerCase();

          const matchesTitle = title.includes(filter);
          const matchesGenre = selectedGenre === '' ? true : movie.genre === selectedGenre;

          return matchesTitle && matchesGenre;
        })
      ).map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
