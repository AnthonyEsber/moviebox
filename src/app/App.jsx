import { BrowserRouter, Route, Routes } from 'react-router';
import Home from '../routes/Home';
import WatchList from '../routes/WatchList';
import { WLProvider } from '../utils/WLContext';
import MainLayout from '../layouts/MainLayout';
import { MovieProvider } from '../utils/MovieContext';
import MovieModal from '../components/MovieModal/MovieModal';
import ModalLayout from '../layouts/ModalLayout';

function App() {
  return (
    <MovieProvider>
      <WLProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<ModalLayout page={<Home />} />}>
                <Route path="movie/:id" element={<MovieModal />} />
              </Route>
              <Route path="/watchlist" element={<ModalLayout page={<WatchList />} />}>
                <Route path="movie/:id" element={<MovieModal />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </WLProvider>
    </MovieProvider>
  );
}

export default App;
