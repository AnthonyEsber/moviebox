import { BrowserRouter, Route, Routes } from 'react-router';
import Home from '../routes/Home';
import WatchList from '../routes/WatchList';
import { WLProvider } from '../utils/WLContext';
import MainLayout from '../layouts/MainLayout';

function App() {
  return (
    <WLProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/watchlist" element={<WatchList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </WLProvider>
  );
}

export default App;
