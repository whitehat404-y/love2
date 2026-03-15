import { Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenLetter: () => void;
}

export default function Hero({ onOpenLetter }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-pink-100 via-rose-100 to-pink-200">
      <div className="absolute inset-0 opacity-20 hidden md:block">
        <div className="absolute top-20 left-20 text-6xl animate-pulse">💕</div>
        <div className="absolute top-40 right-32 text-4xl animate-bounce" style={{ animationDelay: '1s' }}>✨</div>
        <div className="absolute bottom-32 left-40 text-5xl animate-pulse" style={{ animationDelay: '2s' }}>💖</div>
        <div className="absolute bottom-20 right-20 text-4xl animate-bounce">💝</div>
      </div>

      <div className="text-center z-10 px-4 md:px-6 animate-fadeIn">
        <div className="flex justify-center mb-4 md:mb-6">
          <Sparkles className="text-pink-400 w-8 md:w-12 h-8 md:h-12 animate-spin-slow" />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-pink-600 mb-4 md:mb-6 drop-shadow-lg animate-slideDown">
          For My Love,
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-rose-500 mb-6 md:mb-8 drop-shadow-lg animate-slideDown" style={{ animationDelay: '0.2s' }}>
          Priyanka ❤️
        </h2>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-pink-700 mb-8 md:mb-12 font-medium animate-slideUp" style={{ animationDelay: '0.4s' }}>
          A small corner of the internet made only for you.
        </p>

        <button
          onClick={onOpenLetter}
          className="bg-gradient-to-r from-pink-400 to-rose-400 text-white px-6 sm:px-8 md:px-10 py-3 md:py-5 rounded-full text-base sm:text-lg md:text-xl font-semibold shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce-gentle"
          style={{ animationDelay: '0.6s' }}
        >
          Open My Letter 💌
        </button>
      </div>
    </section>
  );
}
