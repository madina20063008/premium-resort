import { Mountain, Heart, Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1B263B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0D3B66] to-[#2E7D32] flex items-center justify-center">
                <Mountain size={20} className="text-white" />
              </div>
              <span className="text-2xl font-['Playfair_Display']">
                QORABULOQ PLAZA
              </span>
            </div>
            <p className="text-white/70 font-['Poppins'] text-sm mb-4 max-w-md">
              Your private mountain & riverside escape. Where luxury meets nature,
              and every moment becomes a cherished memory.
            </p>
            <div className="flex gap-3">
              <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-[#0D3B66] hover:to-[#2E7D32] flex items-center justify-center transition-all">
                <Facebook size={18} />
              </button>
              <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-[#0D3B66] hover:to-[#2E7D32] flex items-center justify-center transition-all">
                <Instagram size={18} />
              </button>
              <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-[#0D3B66] hover:to-[#2E7D32] flex items-center justify-center transition-all">
                <Twitter size={18} />
              </button>
              <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-[#0D3B66] hover:to-[#2E7D32] flex items-center justify-center transition-all">
                <MessageCircle size={18} />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-['Playfair_Display'] text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 font-['Poppins'] text-sm">
              {['About', 'Rooms', 'Activities', 'Gallery', 'Pricing'].map(
                (link) => (
                  <li key={link}>
                    <button
                      onClick={() => {
                        const element = document.querySelector(
                          `#${link.toLowerCase()}`
                        );
                        if (element)
                          element.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-white/70 hover:text-[#FFD54F] transition-colors"
                    >
                      {link}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-['Playfair_Display'] text-lg mb-4">Contact</h3>
            <ul className="space-y-2 font-['Poppins'] text-sm text-white/70">
              <li>+998 91 809 66 66</li>
              <li>info@qorabuloqplaza.com</li>
              <li>Mountain Region</li>
              <li>45 km from City Center</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 font-['Poppins'] text-sm text-center md:text-left">
            © 2026 Qorabuloq Plaza. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-white/60 font-['Poppins'] text-sm">
            <span>Made with</span>
            <Heart size={14} fill="#FFD54F" className="text-[#FFD54F]" />
            <span>for nature lovers</span>
          </div>
        </div>
      </div>
    </footer>
  );
}