import { useRef } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../base/Icon';

export default function CardSection({
  title,
  highlight,
  linkText,
  linkTo,
  children,
}) {
  const scrollRef = useRef(null);

  function scroll(direction) {
    if (!scrollRef.current) return;
    // Use fixed scroll amount to mimic standard carousel
    const amount = direction === 'left' ? -300 : 300;
    scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
  }

  return (
    <section className="py-14">
      <div className="max-w-[1280px] mx-auto px-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-extrabold tracking-tight">
            {title} <span className="text-[#c084fc]">{highlight}</span>
          </h2>
          <Link
            to={linkTo || '#'}
            className="text-sm font-semibold text-[#a78bfa] flex items-center gap-1
                       hover:gap-2 hover:text-[#c084fc] transition-all"
          >
            {linkText}
            <Icon name="arrow-right" size={14} />
          </Link>
        </div>
        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-11 h-11
                       bg-black/40 backdrop-blur-sm border border-[#7c3aed]/40 rounded-full
                       flex items-center justify-center text-white hover:bg-[#7c3aed]/35
                       transition-all"
            aria-label="Scroll right"
          >
            <img
              src="/assets/images/arrow-left.png"
              alt=""
              className="w-5 h-5"
            />
          </button>
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 py-4"
            // Hide scrollbar while maintaining functional scrolling
            style={{ scrollbarWidth: 'none' }}
          >
            {children}
          </div>
          <button
            onClick={() => scroll('right')}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-11 h-11
                       bg-black/40 backdrop-blur-sm border border-[#7c3aed]/40 rounded-full
                       flex items-center justify-center text-white hover:bg-[#7c3aed]/35
                       transition-all"
            aria-label="Scroll right"
          >
            <img
              src="/assets/images/arrow-right.png"
              alt=""
              className="w-5 h-5"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
