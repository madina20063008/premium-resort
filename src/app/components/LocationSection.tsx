import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { MapPin, Navigation, Clock } from 'lucide-react';
import { InteractiveMap } from './InteractiveMap';

export function LocationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#2E7D32] font-['Poppins'] tracking-wider uppercase text-sm">
            Location & Directions
          </span>
          <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] text-[#1B263B] mt-2 mb-4">
            Find Your Way to Paradise
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-px bg-[#FFD54F]" />
            <div className="w-2 h-2 rounded-full bg-[#FFD54F]" />
            <div className="w-16 h-px bg-[#FFD54F]" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="rounded-2xl overflow-hidden shadow-xl h-[400px]"
          >
            <InteractiveMap
              latitude={39.251791834740125}
              longitude={67.08046266891468}
              zoom={13}
            />
          </motion.div>

          {/* Location Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Distance from City */}
            <div className="bg-[#F5F7FA] rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0D3B66] to-[#2E7D32] flex items-center justify-center flex-shrink-0">
                  <Navigation size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-['Playfair_Display'] text-[#1B263B] mb-2">
                    Distance from City
                  </h3>
                  <p className="text-[#1B263B]/70 font-['Poppins']">
                    Located 45 km from the city center, nestled in the pristine
                    mountain region with easy access via well-maintained roads.
                  </p>
                </div>
              </div>
            </div>

            {/* Travel Time */}
            <div className="bg-[#F5F7FA] rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0D3B66] to-[#2E7D32] flex items-center justify-center flex-shrink-0">
                  <Clock size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-['Playfair_Display'] text-[#1B263B] mb-2">
                    Travel Time
                  </h3>
                  <p className="text-[#1B263B]/70 font-['Poppins']">
                    Approximately 60-75 minutes by car from downtown. Scenic
                    mountain drive with breathtaking views along the way.
                  </p>
                </div>
              </div>
            </div>

            {/* Directions */}
            <div className="bg-[#F5F7FA] rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0D3B66] to-[#2E7D32] flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-['Playfair_Display'] text-[#1B263B] mb-2">
                    Getting Here
                  </h3>
                  <p className="text-[#1B263B]/70 font-['Poppins'] mb-3">
                    Detailed directions will be provided upon booking confirmation.
                    GPS coordinates and landmarks included.
                  </p>
                  <button className="text-[#0D3B66] font-['Poppins'] hover:underline">
                    Request Directions →
                  </button>
                </div>
              </div>
            </div>

            {/* Note */}
            <div className="bg-gradient-to-r from-[#FFD54F]/10 to-[#FFD54F]/5 border-l-4 border-[#FFD54F] rounded-lg p-4">
              <p className="text-[#1B263B]/70 font-['Poppins'] text-sm">
                <strong className="text-[#1B263B]">Note:</strong> We recommend
                arrival during daylight hours for the best scenic experience.
                4WD vehicles are not required.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}