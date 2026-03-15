import { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';

export default function LoveTimer() {
  const [days, setDays] = useState(0);

  useEffect(() => {
    const startDate = new Date('2026-01-26');

    const calculateDays = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();
      const daysDiff = Math.floor(diff / (1000 * 60 * 60 * 24));
      setDays(daysDiff);
    };

    calculateDays();
    const interval = setInterval(calculateDays, 1000 * 60 * 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-rose-100 to-pink-100">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-6 md:p-12 text-center border-4 border-pink-300 animate-fadeIn">
          <div className="flex justify-center mb-4 md:mb-6">
            <Clock className="w-12 md:w-16 h-12 md:h-16 text-pink-500" />
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-pink-600 mb-6 md:mb-8">
            Days Since We Met
          </h3>

          <div className="bg-gradient-to-br from-pink-400 to-rose-400 rounded-2xl p-6 md:p-8 mb-4 md:mb-6">
            <div className="text-5xl sm:text-7xl md:text-9xl font-bold text-white mb-2 md:mb-4 break-words">
              {days}
            </div>
            <p className="text-lg sm:text-xl md:text-2xl text-white font-semibold">
              Days of Love & Counting 💕
            </p>
          </div>

          <p className="text-base md:text-xl text-gray-700 italic">
            Every single day with you is a blessing
          </p>
        </div>
      </div>
    </section>
  );
}
