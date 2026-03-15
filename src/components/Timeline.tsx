import { Calendar, Heart, MapPin, Sparkles } from 'lucide-react';

export default function Timeline() {
  const events = [
    {
      icon: Calendar,
      date: '26 January',
      title: 'The day we first met',
      color: 'from-pink-400 to-rose-400',
    },
    {
      icon: Heart,
      date: '29 January',
      title: 'The day you proposed to me',
      color: 'from-rose-400 to-pink-500',
    },
    {
      icon: MapPin,
      date: 'Long Distance',
      title: 'Delhi ❤️ Rajasthan',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: Sparkles,
      date: 'Our Dream',
      title: 'One day getting married and living together',
      color: 'from-rose-500 to-pink-600',
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-rose-50 to-pink-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-pink-600 mb-16 animate-fadeIn">
          Our Story Timeline 💕
        </h2>

        <div className="space-y-8 md:space-y-12">
          {events.map((event, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 animate-slideIn"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`bg-gradient-to-br ${event.color} p-4 md:p-6 rounded-full shadow-xl flex-shrink-0 transform hover:scale-110 transition-all duration-300`}>
                <event.icon className="w-6 md:w-8 h-6 md:h-8 text-white" />
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 flex-1 border-2 border-pink-200 hover:shadow-xl transition-all duration-300 hover:scale-105 w-full md:w-auto">
                <p className="text-pink-600 font-bold text-base md:text-lg mb-1 md:mb-2">{event.date}</p>
                <p className="text-gray-800 text-lg md:text-xl font-medium">{event.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
