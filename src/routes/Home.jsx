import FilterableMovieList from '../components/FilterableMovieList/FilterableMovieList.jsx';
import { useJsonLoad } from '../hooks/useJsonLoad';

function Home({ watchList, setWatchList }) {
  const { data: movies, loading, error } = useJsonLoad();

  return (
    <div className="main-content">
      {loading && <p>Loading...</p>}
      {movies.length > 0 && (
        <FilterableMovieList watchList={watchList} setWatchList={setWatchList} movies={movies} />
      )}
      {error && <p>{error}</p>}
    </div>
  );
}

export default Home;
