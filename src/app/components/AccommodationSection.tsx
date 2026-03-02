import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Users, Bed, Coffee, Wifi, Wind, Flame } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AccommodationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const rooms = [
    {
      name: 'Tog\' Manzarali Lyuks',
      image:
        'https://images.unsplash.com/photo-1768413292047-116be08f120c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwbHV4dXJ5JTIwY2FiaW4lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzA4ODI5NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      capacity: '4-6 Mehmon',
      amenities: [
        { icon: Bed, label: '3 ta Yotoqxona' },
        { icon: Coffee, label: 'Oshxona' },
        { icon: Wifi, label: 'Wi-Fi' },
      ],
    },
    {
      name: 'Daryo Bo\'yidagi Kottej',
      image:
        'https://images.unsplash.com/photo-1759281944533-a9eea164ffe3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb3VudGFpbiUyMHJlc29ydCUyMGNhYmlufGVufDF8fHx8MTc3MDg4Mjk1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      capacity: '2-4 Mehmon',
      amenities: [
        { icon: Bed, label: '2 ta Yotoqxona' },
        { icon: Wind, label: 'Terassa' },
        { icon: Wifi, label: 'Wi-Fi' },
      ],
    },
    {
      name: 'O\'rmon Dam Olish Joyi',
      image:
        'https://images.unsplash.com/photo-1615284478437-731c1432efee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHJlc29ydCUyMGV4dGVyaW9yJTIwc3Vuc2V0fGVufDF8fHx8MTc3MDg4Mjk1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      capacity: '6-8 Mehmon',
      amenities: [
        { icon: Bed, label: '4 ta Yotoqxona' },
        { icon: Flame, label: 'Kamin' },
        { icon: Coffee, label: 'To\'liq Oshxona' },
      ],
    },
  ];

  return (
    <section id="rooms" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#2E7D32] font-['Poppins'] tracking-wider uppercase text-sm">
            Bizning Turar Joylarimiz
          </span>
          <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] text-[#1B263B] mt-2 mb-4">
            Qulay Hashamat Sizni Kutmoqda
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-px bg-[#FFD54F]" />
            <div className="w-2 h-2 rounded-full bg-[#FFD54F]" />
            <div className="w-16 h-px bg-[#FFD54F]" />
          </div>
          <p className="text-[#1B263B]/60 font-['Poppins'] max-w-2xl mx-auto text-lg">
            Har biri maksimal qulaylik bilan ta'minlangan va sizni tabiat bilan bog'lab turuvchi xonalarimizdan birini tanlang.
          </p>
        </motion.div>

        {/* Room Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-2xl font-['Playfair_Display']">
                    {room.name}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Capacity */}
                <div className="flex items-center gap-2 text-[#1B263B]/70 mb-4">
                  <Users size={18} />
                  <span className="font-['Poppins'] text-sm">{room.capacity}</span>
                </div>

                {/* Amenities */}
                <div className="space-y-3">
                  {room.amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#F5F7FA] flex items-center justify-center">
                        <amenity.icon size={16} className="text-[#0D3B66]" />
                      </div>
                      <span className="text-[#1B263B]/70 font-['Poppins'] text-sm">
                        {amenity.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <button className="w-full mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-[#0D3B66] to-[#2E7D32] text-white hover:shadow-lg transition-all">
                  Batafsil Ko'rish
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}