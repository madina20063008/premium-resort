import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Footprints, Fish, Flame, Tent, Waves, TreePine } from 'lucide-react';

export function ActivitiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const activities = [
    {
      icon: Footprints,
      title: 'Tog\'larda Sayr',
      description: 'Hayratlanarli manzarali yo\'llarni kashf eting',
    },
    {
      icon: Fish,
      title: 'Daryoda Baliq Ovlash',
      description: 'Musaffo suvda yangi baliq tutib oling',
    },
    {
      icon: Flame,
      title: 'Mangal va Gril',
      description: 'Yuqori sifatli uskunalar bilan ochiq havoda pishirish',
    },
    {
      icon: Tent,
      title: 'Gulxan Kechalari',
      description: 'Yulduzlar ostida olov atrofida yig\'iling',
    },
    {
      icon: Waves,
      title: 'Daryoda Suzish',
      description: 'Tabiiy tog\' daryolarida tetiklan',
    },
    {
      icon: TreePine,
      title: 'O\'rmonda Sayr-Sayohat',
      description: 'Tabiat qo\'ynidagi tinch joylar',
    },
  ];

  return (
    <section id="activities" ref={ref} className="py-20 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#2E7D32] font-['Poppins'] tracking-wider uppercase text-sm">
            Faoliyatlar va Tajribalar
          </span>
          <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] text-[#1B263B] mt-2 mb-4">
            Sarguzasht Sizni Kutmoqda
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-px bg-[#FFD54F]" />
            <div className="w-2 h-2 rounded-full bg-[#FFD54F]" />
            <div className="w-16 h-px bg-[#FFD54F]" />
          </div>
          <p className="text-[#1B263B]/60 font-['Poppins'] max-w-2xl mx-auto text-lg">
            Ruhingizni tetiklantiradigan turli xil ochiq havoda faoliyatlar bilan tabiatga sho'ng'ing.
          </p>
        </motion.div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center text-center">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0D3B66] to-[#2E7D32] flex items-center justify-center mb-6 shadow-lg group-hover:shadow-2xl transition-shadow"
                >
                  <activity.icon className="text-white" size={36} />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-['Playfair_Display'] text-[#1B263B] mb-3">
                  {activity.title}
                </h3>

                {/* Description */}
                <p className="text-[#1B263B]/60 font-['Poppins'] text-sm">
                  {activity.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-10 py-4 rounded-full bg-gradient-to-r from-[#0D3B66] to-[#2E7D32] text-white shadow-lg hover:shadow-2xl transition-all"
          >
            Sarguzashtingizni Rejalashtiring
          </button>
        </motion.div>
      </div>
    </section>
  );
}