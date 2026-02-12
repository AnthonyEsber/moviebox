import FilterableMovieList from '../components/FilterableMovieList/FilterableMovieList.jsx';
import { useJsonLoad } from '../hooks/useJsonLoad';
import useLocalStorage from '../hooks/useLocalStorage.js';

function App() {
  const { data: movies, loading, error } = useJsonLoad();
  const [watchList, setWatchList] = useLocalStorage('watchList', []);

  console.log(movies);
  return (
    <div>
      <header>
        <h1>MovieBox</h1>
      </header>
      <main>
        <div className="main-content">
          {loading && <p>Loading...</p>}
          {movies.length > 0 && (
            <FilterableMovieList
              watchList={watchList}
              setWatchList={setWatchList}
              movies={movies}
            />
          )}
          {error && <p>{error}</p>}
        </div>
      </main>
    </div>
  );
}

export default App;
