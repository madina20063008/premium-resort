import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'motion/react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Biz haqimizda', href: '#about' },
    { label: 'Xonalar', href: '#rooms' },
    { label: 'Faoliyatlar', href: '#activities' },
    { label: 'Galereya', href: '#gallery' },
    { label: 'Narxlar', href: '#pricing' },
    { label: 'Aloqa', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md'
          : 'bg-white/10 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span
              className={`text-2xl font-['Playfair_Display'] transition-colors ${
                isScrolled ? 'text-[#0D3B66]' : 'text-white'
              }`}
            >
              QORABULOQ PLAZA
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`font-['Poppins'] transition-colors hover:text-[#FFD54F] ${
                  isScrolled ? 'text-[#1B263B]' : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('#contact')}
              className="w-full px-6 py-2 rounded-full bg-gradient-to-r from-[#0D3B66] to-[#2E7D32] text-white hover:shadow-lg transition-all"
            >
              Bron qilish
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 ${isScrolled ? 'text-[#1B263B]' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white/95 backdrop-blur-md"
        >
          <div className="px-4 pt-2 pb-4 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-2 text-[#1B263B] hover:bg-[#F5F7FA] rounded-lg font-['Poppins']"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('#contact')}
              className="w-full px-6 py-2 rounded-full bg-gradient-to-r from-[#0D3B66] to-[#2E7D32] text-white hover:shadow-lg transition-all"
            >
              Bron qilish
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}