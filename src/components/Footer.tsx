export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pink-300 via-rose-300 to-pink-300 py-6 md:py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-lg md:text-2xl font-bold text-white mb-2">
          Made with love for Priyanka ❤️
        </p>
        <div className="flex justify-center gap-2 md:gap-3 text-2xl md:text-3xl mt-3 md:mt-4">
          <span className="animate-pulse">💕</span>
          <span className="animate-pulse" style={{ animationDelay: '0.3s' }}>💖</span>
          <span className="animate-pulse" style={{ animationDelay: '0.6s' }}>💗</span>
          <span className="animate-pulse" style={{ animationDelay: '0.9s' }}>💕</span>
        </div>
      </div>
    </footer>
  );
}
