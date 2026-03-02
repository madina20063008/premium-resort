import { motion } from 'motion/react';
import { Home, Mountain } from 'lucide-react';
import { useNavigate } from 'react-router';

export function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D3B66] to-[#2E7D32] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <Mountain size={80} className="text-white/20 mx-auto mb-8" />
        <h1 className="text-8xl font-['Playfair_Display'] text-white mb-4">404</h1>
        <p className="text-2xl text-white/90 font-['Poppins'] mb-8">
          Page not found in the mountains
        </p>
        <button
          onClick={() => navigate('/')}
          className="px-8 py-4 rounded-full bg-white text-[#0D3B66] hover:shadow-2xl transition-all flex items-center gap-2 mx-auto font-['Poppins']"
        >
          <Home size={20} />
          Return Home
        </button>
      </motion.div>
    </div>
  );
}
