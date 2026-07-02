import Icon from '../base/Icon';
import MovieCard from './MovieCard';

export default function DetailModal({ movie, isOpen, onClose, onPlayClick }) {
  if (!isOpen || !movie) return null;

  // static recomendation
  const recommendedMovies = [
    {
      id: 11,
      title: 'Poor Things',
      rating: 8.0,
      image: '/assets/images/trending.png',
      meta: '2023',
    },
    {
      id: 12,
      title: 'Civil War',
      rating: 7.6,
      image: '/assets/images/trending.png',
      meta: '2024',
    },
    {
      id: 13,
      title: 'Furiosa',
      rating: 7.9,
      image: '/assets/images/trending.png',
      meta: '2024',
    },
    {
      id: 14,
      title: 'Kingdom of Planet of the Apes',
      rating: 7.1,
      image: '/assets/images/trending.png',
      meta: '2024',
    },
    {
      id: 15,
      title: 'Inside Out 2',
      rating: 7.7,
      image: '/assets/images/trending.png',
      meta: '2024',
    },
  ];

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-[#1a1a26] rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-[#a78bfa] z-10"
        >
          <Icon name="info" size={24} />
        </button>

        {/* Hero */}
        <div className="w-full h-64 overflow-hidden">
          <img
            src={movie.image}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Title */}
          <h2 className="text-2xl font-bold text-[#f1f0f5]">{movie.title}</h2>

          {/* Metadada */}
          <div className="flex items-center gap-3 text-sm">
            <span className="bg-[#4a4a5e] text-white px-3 -y-1 rounded">
              {movie.ageRating}
            </span>
            <span className="text-[#5c4a70]">
              {movie.episodes ? `{movie.episodes} Episodes` : 'Film'}
            </span>
            <span className="text-[#5c5a70]">Rating: {movie.rating}/10</span>
          </div>

          {/* Genres */}
          <div className="text-[#5c5a70] text-sm">
            {movie.genres.join(' • ')}
          </div>

          {/* Synopsis */}
          <div>
            <h3 className="font-bold text-[#f1f0f5] mb-2">Synopsis</h3>
            <p className="text-[#9b99ab] text-sm leading-relaxed">
              {movie.synopsis}
            </p>
          </div>

          {/* Cast & Dir */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-bold text-[#f1f0f5] text-sm mb-1">
                Director
              </h4>
              <p className="text-[#5c5a70] text-sm">{movie.director}</p>
            </div>
            <div>
              <h4 className="font-bold text-[#f1f0f5] text-sm mb-1">Cast</h4>
              <p className="text-[#5c5a70] text-sm">
                {movie.cast?.join(' • ')}
              </p>
            </div>
          </div>

          {/* Action button */}
          <div className="flex gap-3 pt-4">
            <button
              onClick={onPlayClick}
              className="flex-1 bg-[#0f1e93] hover:bg=[#0367db] text-white font-bold py-2 px-4
                rounded-full flex items-center justify-center gap-2 transition"
            >
              <Icon name="play" size={18} /> Play
            </button>
            <button
              className="flex-1 border border-white/30 text-white hover:bg-white/10 font-bold
            py-2 px-4 rounded-full transition"
            >
              <Icon name="plus-icon" size={18} /> Add to List
            </button>
          </div>

          {/* Recomendation Section */}
          <div className="mt-8 pt-6 border-t border-[#2a2a3d]">
            <h3 className="font-bold text-[#f1f0f5] mb-4">Recomended</h3>
            <div className="grid grid-cols-4 gap-3">
              {recommendedMovies.map((m) => (
                <MovieCard key={m.id} {...m} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
