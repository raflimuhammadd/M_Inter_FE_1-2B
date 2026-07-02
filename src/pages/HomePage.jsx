import HomeLayout from '../templates/HomeLayout';
import Hero from '../components/layout/Hero';
import CardSection from '../components/shared/CardSection';
import MovieCard from '../components/shared/MovieCard';
import {
  continueWatching,
  topRated,
  trending,
  newReleases,
} from '../data/movies';
import {useState, lazy, Suspense} from 'react';
import {useNavigate} from 'react-router-dom';
const DetailModal = lazy(() => import('../components/shared/DetailModal'));


export default function HomePage() {
  const navigate = useNavigate();
  const [watchlist, setWatchlist] = useState(() => {
    const saved = localStorage.getItem('chill-streams-v1-watchlist');
    if (saved) {
      const parsed = JSON.parse(saved);
      return parsed.data || [];
    }
    return [];
  });
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showDetailModal, setShowDetailModal] = useState(false);

  const isInWatchlist = (id) => watchlist.includes(id);

  const handleAddToWatchlist = (id) => {
    setWatchlist(prev => {
      const updated = [...prev, id];
      localStorage.setItem('chill-streams-v1-watchlist',JSON.stringify({version: 1, data: updated}))
      return updated;
    });
  };

    const handleRemoveFromWatchlist = (id) => {
    setWatchlist(prev => {
      const updated = prev.filter(wId => wId !== id);
      localStorage.setItem('chill-streams-v1-watchlist',
        JSON.stringify({ version: 1, data: updated })
      );
      return updated;
    });
  };

  const handleShowDetail = (movie) => {
    setSelectedMovie(movie);
    setShowDetailModal(true);
  };

   const handlePlayClick = (movieId) => {
     navigate(`/player/${movieId}`);
   };

   return (
    <HomeLayout>
      {/* Hero data is passed directly; no API fetch in this version */}
      <Hero
        title="Duty After School"
        description="Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang."
        rating={9.2}
        year={2024}
        duration="2j 49m"
        genres="Sci-Fi • Drama"
        image="/assets/images/beranda.png"
        badgeText="Watch Now"
      />

      <CardSection
         title="Melanjutkan Tonton Film"
         linkText="Lihat semua"
         linkTo="#"
       >
         {continueWatching.map((m) => (
           <MovieCard 
             key={m.id} 
             variant="continue-watching" 
             {...m}
             isInWatchlist={isInWatchlist(m.id)}
             onAddToWatchlist={() => handleAddToWatchlist(m.id)}
             onRemoveFromWatchlist={() => handleRemoveFromWatchlist(m.id)}
             onShowDetail={() => handleShowDetail(m)}
             onPlayClick={() => handlePlayClick(m.id)}
           />
         ))}
       </CardSection>

      {/* Alternating dark bg for section separation */}
      <div className="bg-[#16161f]">
        <CardSection
          title="Top Rating Film dan Series Hari ini"
          linkText="Lihat semua"
          linkTo="#"
        >
          {topRated.map((m) => (
            <MovieCard key={m.id} {...m} />
          ))}
        </CardSection>
      </div>

      <CardSection title="Film Trending" linkText="Lihat semua" linkTo="#">
        {trending.map((m) => (
          <MovieCard key={m.id} badge="trending" {...m} />
        ))}
      </CardSection>

       <CardSection title="Rilis Baru" linkText="Lihat semua" linkTo="#">
         {newReleases.map((m) => (
           <MovieCard key={m.id} badge="new" {...m} />
         ))}
       </CardSection>

       {showDetailModal && (
         <Suspense fallback={<div className="fixed inset-0 bg-black/50 flex items-center justify-center"><p className="text-white">Loading...</p></div>}>
           <DetailModal
             movie={selectedMovie}
             isOpen={showDetailModal}
             onClose={() => setShowDetailModal(false)}
             onPlayClick={() => handlePlayClick(selectedMovie.id)}
           />
         </Suspense>
       )}
     </HomeLayout>
   );
 }
