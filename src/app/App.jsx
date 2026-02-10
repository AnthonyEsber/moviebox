import Card from '../components/Card/Card.jsx';
import { useJsonLoad } from '../hooks/useJsonLoad';

function App() {
  const { data: movies, loading, error } = useJsonLoad();
  return (
    <div>
      <header>
        <h1>MovieBox</h1>
      </header>
      <main>
        <div className="main-content">
          {loading && <p>Loading...</p>}
          {movies &&
            movies.map((movie) => {
              return <Card key={movie.id} movie={movie} />;
            })}
          {error && <p>{error}</p>}
        </div>
      </main>
    </div>
  );
}

export default App;
