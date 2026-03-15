import { X } from 'lucide-react';

interface SecretMessageProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SecretMessage({ isOpen, onClose }: SecretMessageProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fadeIn">
      <div className="bg-gradient-to-br from-pink-100 to-rose-100 rounded-3xl shadow-2xl max-w-md w-full p-8 relative animate-scaleIn border-4 border-pink-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-pink-600 hover:text-pink-800 transition-colors"
        >
          <X className="w-8 h-8" />
        </button>

        <div className="text-center">
          <div className="text-8xl mb-6 animate-bounce">💕</div>
          <h3 className="text-4xl font-bold text-pink-600 mb-6">
            I miss you too.
          </h3>
          <p className="text-3xl font-bold text-rose-600">
            Always.
          </p>
          <div className="mt-8 flex justify-center gap-4 text-5xl">
            <span className="animate-pulse">💖</span>
            <span className="animate-pulse" style={{ animationDelay: '0.2s' }}>💗</span>
            <span className="animate-pulse" style={{ animationDelay: '0.4s' }}>💕</span>
          </div>
        </div>
      </div>
    </div>
  );
}
