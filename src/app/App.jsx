import FilterableMovieList from '../components/FilterableMovieList/FilterableMovieList.jsx';
import { useJsonLoad } from '../hooks/useJsonLoad';

function App() {
  const { data: movies, loading, error } = useJsonLoad();

  console.log(movies);
  return (
    <div>
      <header>
        <h1>MovieBox</h1>
      </header>
      <main>
        <div className="main-content">
          {loading && <p>Loading...</p>}
          {movies.length > 0 && <FilterableMovieList movies={movies} />}
          {error && <p>{error}</p>}
        </div>
      </main>
    </div>
  );
}

export default App;
