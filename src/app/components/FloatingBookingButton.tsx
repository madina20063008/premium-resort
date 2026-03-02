import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar } from 'lucide-react';

export function FloatingBookingButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past hero section
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToContact}
          className="fixed bottom-8 right-8 z-40 px-6 py-4 rounded-full bg-gradient-to-r from-[#0D3B66] to-[#2E7D32] text-white shadow-2xl hover:shadow-[0_20px_60px_rgba(13,59,102,0.5)] flex items-center gap-2 font-['Poppins']"
        >
          <Calendar size={20} />
          <span className="hidden md:inline">Book Now</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
