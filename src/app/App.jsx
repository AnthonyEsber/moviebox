import { BrowserRouter, Route, Routes } from 'react-router';
import Home from '../routes/Home';
import WatchList from '../routes/WatchList';

import MainLayout from '../layouts/MainLayout';
import MovieModal from '../components/MovieModal/MovieModal';
import ModalLayout from '../layouts/ModalLayout';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchMovies } from '../store/movieSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
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
  );
}

export default App;
