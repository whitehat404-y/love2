import { Heart } from 'lucide-react';

export default function LoveLetter() {
  return (
    <section id="letter" className="py-12 md:py-20 px-4 bg-gradient-to-b from-pink-50 to-rose-50">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-6 md:p-12 border-4 border-pink-200 relative animate-fadeIn">
          <div className="absolute -top-4 md:-top-6 -left-4 md:-left-6 text-4xl md:text-6xl">💌</div>
          <div className="absolute -top-4 md:-top-6 -right-4 md:-right-6 text-4xl md:text-6xl">💕</div>

          <div className="flex justify-center mb-6 md:mb-8">
            <Heart className="text-pink-500 w-8 md:w-12 h-8 md:h-12 fill-pink-500 animate-pulse" />
          </div>

          <div className="prose prose-sm md:prose-lg prose-pink mx-auto text-gray-800 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
            <h2 className="text-2xl md:text-4xl font-bold text-center text-pink-600 mb-6 md:mb-8">My dear Priyanka ❤️</h2>

            <p className="mb-4">
              I just wanted to write this for you because sometimes the things I feel for you are too big to fit inside normal chats.
            </p>

            <p className="mb-4">
              Being in a long-distance relationship isn't always easy. I miss you a lot. Sometimes I miss you so much that all I want is to hear your voice. That's why talking to you on calls and video calls means everything to me. Those moments when we talk and see each other, even through a screen, make my whole day better.
            </p>

            <p className="mb-4">
              And when you are busy and we can't talk, I end up looking at your pictures. I sit there smiling and thinking about you, wishing that one day we won't have to be far from each other like this. I imagine how nice it would be if we were actually together, spending normal days side by side.
            </p>

            <p className="mb-4">
              The love I feel for you is honestly hard to explain in words. Sometimes I feel like chats are not enough to show how much you mean to me, but I always try my best because you deserve to know how deeply I care about you.
            </p>

            <p className="mb-4">
              I think a lot about our future too. I imagine our life after marriage, the little moments we'll share, the laughs, the conversations, and the life we will build together. I truly want to make you my wife one day. And when that day comes, I promise I will try my best to give you all the love in the world.
            </p>

            <p className="mb-4">
              You are not just someone I love. You are my happiness, my comfort, and honestly my whole world.
            </p>

            <p className="mb-4">
              No matter how far we are right now, my heart is always with you.
            </p>

            <p className="text-center text-2xl font-bold text-pink-600 mt-8">
              I love you so much, Priyanka. ❤️
            </p>
          </div>

          <div className="absolute -bottom-4 md:-bottom-6 left-1/2 transform -translate-x-1/2 text-4xl md:text-6xl">💖</div>
        </div>
      </div>
    </section>
  );
}
