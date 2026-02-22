import Card from '../Card/Card';
import styles from './MovieList.module.css';
import empty from '../../styles/EmptyState.module.css';
import { useMemo } from 'react';

export function MovieList({
  movies,
  filterTitle = null,
  selectedGenre = '',
  sortBy = 'default',
  emptyMessage = null,
}) {
  const getSortedMovies = (movies) => {
    const sorted = [...movies];
    if (sortBy === 'rating') {
      sorted.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
    } else if (sortBy === 'alphabetical') {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    }
    return sorted;
  };

  const filteredMovies = useMemo(() => {
    return getSortedMovies(
      movies.filter((movie) => {
        const title = movie.title.toLowerCase() ?? '';
        const filter = (filterTitle ?? '').toLowerCase();

        const matchesTitle = title.includes(filter);
        const matchesGenre = selectedGenre === '' ? true : movie.genre === selectedGenre;

        return matchesTitle && matchesGenre;
      })
    );
  }, [movies, filterTitle, selectedGenre, sortBy]);

  return (
    <div className={styles.movieGrid}>
      {filteredMovies.length > 0 ? (
        filteredMovies.map((movie) => <Card key={movie.id} movie={movie} />)
      ) : (
        <div className={empty.emptyState}>
          <p className={empty.emptyTitle}>{emptyMessage ?? 'No movies found'}</p>
          <p className={empty.emtpyText}>
            {filterTitle || selectedGenre
              ? 'Try adjusting your search or filters to find what you are looking for'
              : 'There are no movies to display.'}
          </p>
        </div>
      )}
    </div>
  );
}

export default MovieList;
