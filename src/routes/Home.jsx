import FilterableMovieList from '../components/FilterableMovieList/FilterableMovieList.jsx';
import { useMoviesContext } from '../hooks/useMoviesContext.js';

function Home() {
  const { movies, loading, error } = useMoviesContext();

  return (
    <div className="main-content">
      {loading && <p>Loading...</p>}
      {movies.length > 0 && <FilterableMovieList movies={movies} />}
      {error && <p>{error}</p>}
    </div>
  );
}

export default Home;
