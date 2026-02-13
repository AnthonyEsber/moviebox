import { BrowserRouter, Route, Routes } from 'react-router';
import Home from '../routes/Home';
import WatchList from '../routes/WatchList';
import Header from '../components/Header/Header';
import useLocalStorage from '../hooks/useLocalStorage';

function App() {
  const [watchList, setWatchList] = useLocalStorage('watchList', []);
  return (
    <BrowserRouter>
      <div>
        <header>
          <Header />
          <h1>Movieboxt</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home watchList={watchList} setWatchList={setWatchList} />} />
            <Route
              path="/watchlist"
              element={<WatchList watchList={watchList} setWatchList={setWatchList} />}
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
