import { Heart, MessageCircle, Phone, Image, Smile, Star } from 'lucide-react';

export default function WhyILoveYou() {
  const reasons = [
    { icon: Heart, text: 'Your voice' },
    { icon: MessageCircle, text: 'Your sweet voice notes' },
    { icon: Image, text: 'When you send random pictures' },
    { icon: Smile, text: 'Listening to your life stories' },
    { icon: Phone, text: 'Our phone calls' },
    { icon: Star, text: 'The way you trust me with your problems' },
  ];

  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-pink-100 to-rose-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-pink-600 mb-8 md:mb-16 animate-fadeIn">
          Why I Love You 💖
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl md:rounded-3xl shadow-lg p-6 md:p-8 text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-pink-200 group animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-to-br from-pink-400 to-rose-400 p-4 md:p-6 rounded-full w-16 md:w-20 h-16 md:h-20 mx-auto mb-4 md:mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <reason.icon className="w-8 md:w-10 h-8 md:h-10 text-white" />
              </div>
              <p className="text-base md:text-xl font-medium text-gray-800">{reason.text}</p>
              <div className="mt-4 text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                💕
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
