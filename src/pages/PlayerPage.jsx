import {useParams, useNavigate} from 'react-router-dom';
import {continueWatching, topRated, trending, newReleases} from '../data/movies';

export default function PlayerPage() {
    const {id} = useParams();
    const navigate = useNavigate();

    // find movie from arrays
    const allMovies = [...continueWatching, ...topRated, ...trending, ...newReleases];
    const movie = allMovies.find((m) => m.id === parseInt(id));
    const movieTitle = movie?.title || 'Unknown Movie';

    return (
    <div className="min-h-screen bg-[#0d0d0f] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-white mb-4">
          Player for: {movieTitle} (ID: {id})
        </h1>
        <p className="text-[#9b99ab] mb-8">
          Video player akan di-implement di fase selanjutnya
        </p>
        <button
          onClick={() => navigate(-1)}
          className="bg-[#0F1E93] hover:bg-[#0367DB] text-white font-bold py-2 px-6 rounded-full transition"
        >
          Back
        </button>
      </div>
    </div>
  );
}