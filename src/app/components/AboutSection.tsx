import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Mountain, Wind, Trees, Waves } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    { icon: Mountain, text: 'Hayratlanarli Tog\' Manzaralari' },
    { icon: Waves, text: 'Musaffo Toza Daryo' },
    { icon: Trees, text: 'Yashil O\'rmonlar' },
    { icon: Wind, text: 'Toza Tog\' Havosi' },
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1769479420764-87bad928dfe9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMG5hdHVyZSUyMHJldHJlYXQlMjB2aWV3fGVufDF8fHx8MTc3MDg4Mjk1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Nature View"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#0D3B66] to-[#2E7D32] rounded-2xl -z-10" />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <span className="text-[#2E7D32] font-['Poppins'] tracking-wider uppercase text-sm">
                Jannatga Xush Kelibsiz
              </span>
              <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] text-[#1B263B] mt-2">
                Sizning Shaxsiy Tog' Dam Olish Joyingiz
              </h2>
            </div>

            <div className="w-20 h-1 bg-gradient-to-r from-[#0D3B66] to-[#2E7D32] rounded-full" />

            <p className="text-[#1B263B]/70 font-['Poppins'] text-lg leading-relaxed">
              Qorabuloq Plaza beg'ubor tabiat qo'ynida joylashgan bo'lib, oddiylikdan maxsus qochish imkonini taqdim etadi. Ulug'vor tog'lar, oqar daryo va yashil o'rmonlar bilan o'ralgan shaxsiy dam olish uyimiz dam olish va tiklanish uchun mukammal muhitni taqdim etadi.
            </p>

            <p className="text-[#1B263B]/70 font-['Poppins'] text-lg leading-relaxed">
              Hashamat va tabiatning uyg'unligini his eting, bu yerda har bir lahza chuqur nafas olish, to'liq dam olish va eng muhim narsalar bilan qayta aloqa o'rnatish uchun taklifdir.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0D3B66] to-[#2E7D32] flex items-center justify-center flex-shrink-0">
                    <feature.icon className="text-white" size={20} />
                  </div>
                  <span className="text-[#1B263B] font-['Poppins'] text-sm">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}