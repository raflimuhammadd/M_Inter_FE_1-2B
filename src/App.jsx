import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import SeriesPage from './pages/SeriesPage';
import FilmsPage from './pages/FilmsPage';
import WatchListPage from './pages/WatchListPage';
import PlayerPage from './pages/PlayerPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/series" element={<SeriesPage />} />
        <Route path="/films" element={<FilmsPage />} />
        <Route path="/watch-list" element={<WatchListPage />} />
        <Route path="/player/:id" element={<PlayerPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
