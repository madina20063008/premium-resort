import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1600257729950-13a634d32697?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHJpdmVyJTIwbmF0dXJlJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc3MDg4Mjk1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Mountain River Landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="space-y-6"
        >
          {/* Logo / Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="inline-block"
          >
            <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-[#0D3B66] to-[#2E7D32] flex items-center justify-center shadow-2xl">
              <span className="text-4xl text-white">Q</span>
            </div>
          </motion.div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-['Playfair_Display'] text-white drop-shadow-2xl">
            Qorabuloq Plaza
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 font-['Poppins'] font-light max-w-2xl mx-auto">
            Tog'lar va Daryo Bo'yidagi Dam Olish Maskani
          </p>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 py-4">
            <div className="w-16 h-px bg-[#FFD54F]" />
            <div className="w-2 h-2 rounded-full bg-[#FFD54F]" />
            <div className="w-16 h-px bg-[#FFD54F]" />
          </div>

          {/* Description */}
          <p className="text-white/80 font-['Poppins'] max-w-xl mx-auto text-lg">
            Tabiat qo'ynida tinchlik toping. Sizning shaxsiy muqaddas joyingiz kutmoqda.
          </p>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="mt-8 px-10 py-4 rounded-full bg-gradient-to-r from-[#0D3B66] to-[#2E7D32] text-white shadow-2xl hover:shadow-[0_20px_60px_rgba(13,59,102,0.4)] transition-all duration-300"
          >
            Bron Qilish
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-white/80 hover:text-white transition-colors"
          >
            <ChevronDown size={40} />
          </motion.div>
        </motion.button>
      </div>
    </div>
  );
}