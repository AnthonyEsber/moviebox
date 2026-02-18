import FilterableMovieList from '../components/FilterableMovieList/FilterableMovieList.jsx';
import { useMoviesContext } from '../hooks/useMoviesContext.js';
import empty from '../styles/EmptyState.module.css';

function Home() {
  const { movies, loading, error } = useMoviesContext();

  if (loading) {
    return (
      <div>
        <div>
          <p>Loading movies...</p>
        </div>
      </div>
    );
  }

  if (error) {
    <div className={empty.movieGrid}>
      <div>
        <p>Something went wrong!</p>
        <p>{error}</p>
      </div>
    </div>;
  }

  if (movies.length === 0) {
    return (
      <div className={empty.movieGrid}>
        <div className={empty.emptyState}>
          <p className={empty.emptyTitle}>No movies available</p>
          <p className={empty.emptyText}>
            There are no movies in the catalog right now. Check back later!
          </p>
        </div>
      </div>
    );
  }
  return <FilterableMovieList movies={movies} />;
}

export default Home;
