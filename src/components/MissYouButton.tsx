import { Heart } from 'lucide-react';

interface MissYouButtonProps {
  onClick: () => void;
}

export default function MissYouButton({ onClick }: MissYouButtonProps) {
  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-pink-100 to-rose-50">
      <div className="max-w-lg mx-auto text-center">
        <button
          onClick={onClick}
          className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 sm:px-10 md:px-12 py-4 md:py-6 rounded-full text-base sm:text-xl md:text-2xl font-bold shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 flex items-center justify-center gap-2 md:gap-3 mx-auto group animate-bounce-gentle w-full md:w-auto"
        >
          <Heart className="w-6 md:w-8 h-6 md:h-8 fill-white group-hover:animate-pulse flex-shrink-0" />
          <span>Click if you miss me ❤️</span>
        </button>
      </div>
    </section>
  );
}
