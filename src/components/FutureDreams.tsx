import { Home, Heart, Sparkles } from 'lucide-react';

export default function FutureDreams() {
  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-pink-50 to-rose-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-pink-600 mb-8 md:mb-16 animate-fadeIn">
          Our Future Together 💍
        </h2>

        <div className="space-y-6 md:space-y-8">
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl p-6 md:p-12 border-4 border-pink-200 animate-slideIn">
            <div className="flex justify-center mb-4 md:mb-6">
              <Home className="w-12 md:w-16 h-12 md:h-16 text-pink-500" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-pink-600 text-center mb-4 md:mb-6">Our Life Together</h3>
            <p className="text-base md:text-xl text-gray-800 leading-relaxed text-center">
              I dream about the day when we'll wake up next to each other every morning.
              No more video calls to say goodnight, no more missing you from miles away.
              Just us, building our own little world together, filled with love, laughter,
              and countless beautiful moments.
            </p>
          </div>

          <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl p-6 md:p-12 border-4 border-rose-200 animate-slideIn" style={{ animationDelay: '0.2s' }}>
            <div className="flex justify-center mb-4 md:mb-6">
              <Heart className="w-12 md:w-16 h-12 md:h-16 text-rose-500 fill-rose-500 animate-pulse" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-rose-600 text-center mb-4 md:mb-6">Our Marriage</h3>
            <p className="text-base md:text-xl text-gray-800 leading-relaxed text-center">
              I can't wait for the day I get to call you my wife. The thought of spending
              the rest of my life with you fills my heart with so much happiness. Together,
              we'll create our own story, overcome every challenge, and celebrate every joy.
              You're not just my love, you're my forever.
            </p>
          </div>

          <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl p-6 md:p-12 border-4 border-pink-200 animate-slideIn" style={{ animationDelay: '0.4s' }}>
            <div className="flex justify-center mb-4 md:mb-6">
              <Sparkles className="w-12 md:w-16 h-12 md:h-16 text-pink-500 animate-spin-slow" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-pink-600 text-center mb-4 md:mb-6">Building Our Dreams</h3>
            <p className="text-base md:text-xl text-gray-800 leading-relaxed text-center">
              I promise to support you in everything you do, to be there for you in every
              high and low, and to love you more with each passing day. Our future is bright,
              and I can't wait to experience every moment of it with you by my side. Together,
              we'll make all our dreams come true.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
