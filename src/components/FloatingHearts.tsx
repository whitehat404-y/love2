import { useEffect, useState } from 'react';

interface Heart {
  id: number;
  left: number;
  delay: number;
  duration: number;
}

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const newHearts = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 4 + Math.random() * 3,
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute text-pink-300 opacity-30 animate-float"
          style={{
            left: `${heart.left}%`,
            bottom: '-20px',
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
            fontSize: `${20 + Math.random() * 20}px`,
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
}
