import { useState } from 'react';
import Hero from './components/Hero';
import LoveLetter from './components/LoveLetter';
import Timeline from './components/Timeline';
import WhyILoveYou from './components/WhyILoveYou';
import FutureDreams from './components/FutureDreams';
import LoveTimer from './components/LoveTimer';
import MissYouButton from './components/MissYouButton';
import SecretMessage from './components/SecretMessage';
import FloatingHearts from './components/FloatingHearts';
import Footer from './components/Footer';

function App() {
  const [showSecretMessage, setShowSecretMessage] = useState(false);

  const scrollToLetter = () => {
    document.getElementById('letter')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative">
      <FloatingHearts />

      <Hero onOpenLetter={scrollToLetter} />
      <LoveLetter />
      <Timeline />
      <WhyILoveYou />
      <FutureDreams />
      <LoveTimer />
      <MissYouButton onClick={() => setShowSecretMessage(true)} />
      <Footer />

      <SecretMessage
        isOpen={showSecretMessage}
        onClose={() => setShowSecretMessage(false)}
      />
    </div>
  );
}

export default App;
