import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

export function ReviewsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const reviews = [
    {
      name: 'Sabina Rahimova',
      avatar: 'SR',
      rating: 5,
      text: 'Mutlaqo ajoyib joy! Tog\' manzaralari bizni hayratda qoldirdi. Oilamiz uchun mukammal dam olish joyi. Tinchlik va osudlik aynan biz izlagan narsa edi.',
      date: 'Yanvar 2026',
    },
    {
      name: 'Jahongir Karimov',
      avatar: 'JK',
      rating: 5,
      text: 'Biz qolgan eng yaxshi dam olish uyi. Daryo kirishidan baliq ovlash juda zo\'r edi va gulxan kechalari sehrli edi. Qattiq tavsiya qilaman!',
      date: 'Dekabr 2025',
    },
    {
      name: 'Malika Yusupova',
      avatar: 'MY',
      rating: 5,
      text: 'Tog\'lardagi yashirin gavhar. Uy toza, zamonaviy va nihoyatda qulay edi. Qolish davridagi har bir lahzadan zavqlandik va albatta qaytamiz.',
      date: 'Noyabr 2025',
    },
    {
      name: 'Bobur Alimov',
      avatar: 'BA',
      rating: 5,
      text: 'Shahar hayotidan mukammal qochish. Tabiat yo\'llari, toza havo va go\'zal manzara buni unutilmas tajribaga aylantirdi. Ajoyib mezbon va zo\'r qulayliklar.',
      date: 'Oktabr 2025',
    },
    {
      name: 'Nilufar Hamidova',
      avatar: 'NH',
      rating: 5,
      text: 'Barcha kutganlarimizdan oshib ketdi! Rasmlar bu joyning qanchalik go\'zal ekanligini to\'liq ko\'rsatmaydi. Shaxsiy, osoyishta va beg\'ubor. Haqiqiy tog\' jannati.',
      date: 'Sentabr 2025',
    },
    {
      name: 'Rustam Qodirov',
      avatar: 'RQ',
      rating: 5,
      text: 'Ajoyib dam olish joyi! Ajralib va dam olish uchun mukammal. Bolalar daryoni yaxshi ko\'rishdi, biz esa hayratlanarli quyosh botishlaridan zavqlandik. Tez orada yana tashrif buyuramiz.',
      date: 'Avgust 2025',
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#2E7D32] font-['Poppins'] tracking-wider uppercase text-sm">
            Mehmonlar Fikrlari
          </span>
          <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] text-[#1B263B] mt-2 mb-4">
            Mehmonlarimiz Nima Deydi
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-px bg-[#FFD54F]" />
            <div className="w-2 h-2 rounded-full bg-[#FFD54F]" />
            <div className="w-16 h-px bg-[#FFD54F]" />
          </div>
          <p className="text-[#1B263B]/60 font-['Poppins'] max-w-2xl mx-auto text-lg">
            Faqat bizning so'zlarimizga ishonmang. Qorabuloq Plaza sehrini his qilganlarning so'zlarini eshiting.
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-[#FFD54F] opacity-20">
                <Quote size={40} fill="currentColor" />
              </div>

              {/* Avatar & Name */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0D3B66] to-[#2E7D32] flex items-center justify-center text-white font-['Poppins']">
                  {review.avatar}
                </div>
                <div>
                  <h4 className="text-[#1B263B] font-['Poppins']">
                    {review.name}
                  </h4>
                  <p className="text-xs text-[#1B263B]/50">{review.date}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#FFD54F" className="text-[#FFD54F]" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-[#1B263B]/70 font-['Poppins'] text-sm leading-relaxed">
                "{review.text}"
              </p>
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
          <p className="text-[#1B263B]/60 font-['Poppins'] mb-6">
            Mamnun mehmonlar jamoasiga qo'shiling
          </p>
          <button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-10 py-4 rounded-full bg-gradient-to-r from-[#0D3B66] to-[#2E7D32] text-white shadow-lg hover:shadow-2xl transition-all"
          >
            Tajribangizni Bron Qiling
          </button>
        </motion.div>
      </div>
    </section>
  );
}