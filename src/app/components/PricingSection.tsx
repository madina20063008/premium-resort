import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Check, Star } from 'lucide-react';

export function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const plans = [
    {
      name: 'Hafta Ichidagi Dam Olish',
      price: '$250',
      period: 'kuniga',
      popular: false,
      features: [
        'Dushanba - Payshanba kunlari',
        'Barcha qulayliklarga to\'liq kirish',
        'Tog\' va daryo manzaralari',
        'Oshxona jihozlari',
        'Wi-Fi kirish',
        'Kechiktirilgan chiqish (12:00)',
      ],
    },
    {
      name: 'Dam Olish Kunlari',
      price: '$350',
      period: 'kuniga',
      popular: true,
      features: [
        'Juma - Yakshanba kunlari',
        'Premium xonalar tanlovi',
        'Barcha qulayliklar kiritilgan',
        'Mangal va gulxan sozlanishi',
        'Faoliyat uskunalari',
        'Kengaytirilgan chiqish (14:00)',
      ],
    },
    {
      name: 'To\'liq Haftalik Paket',
      price: '$1,800',
      period: 'haftasiga',
      popular: false,
      features: [
        '7 ketma-ket tunlar',
        'Eng foydali narx',
        'Bepul oziq-ovqat mahsulotlari',
        'Shaxsiy sayr yo\'lboshchisi',
        'Baliq ovlash uskunalari',
        'Moslashuvchan kirish/chiqish',
      ],
    },
  ];

  return (
    <section id="pricing" ref={ref} className="py-20 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#2E7D32] font-['Poppins'] tracking-wider uppercase text-sm">
            Narx Rejalari
          </span>
          <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] text-[#1B263B] mt-2 mb-4">
            Mukammal Qolishingizni Tanlang
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-px bg-[#FFD54F]" />
            <div className="w-2 h-2 rounded-full bg-[#FFD54F]" />
            <div className="w-16 h-px bg-[#FFD54F]" />
          </div>
          <p className="text-[#1B263B]/60 font-['Poppins'] max-w-2xl mx-auto text-lg">
            Yashirin to'lovlarsiz shaffof narxlar. Barcha tariflar soliq va asosiy qulayliklarni o'z ichiga oladi.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                plan.popular ? 'ring-2 ring-[#FFD54F]' : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-gradient-to-r from-[#FFD54F] to-[#FFA726] text-[#1B263B] px-4 py-1 rounded-bl-xl flex items-center gap-1">
                    <Star size={14} fill="currentColor" />
                    <span className="text-xs font-['Poppins']">Eng Mashhur</span>
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan Name */}
                <h3 className="text-2xl font-['Playfair_Display'] text-[#1B263B] mb-2">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-['Playfair_Display'] text-[#0D3B66]">
                      {plan.price}
                    </span>
                    <span className="text-[#1B263B]/60 font-['Poppins']">
                      {plan.period}
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-[#1B263B]/10 mb-6" />

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#0D3B66] to-[#2E7D32] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={12} className="text-white" />
                      </div>
                      <span className="text-[#1B263B]/70 font-['Poppins'] text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Book Button */}
                <button
                  onClick={() => {
                    const element = document.querySelector('#contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`w-full py-3 rounded-xl transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-[#0D3B66] to-[#2E7D32] text-white shadow-lg hover:shadow-xl'
                      : 'bg-[#F5F7FA] text-[#1B263B] hover:bg-gradient-to-r hover:from-[#0D3B66] hover:to-[#2E7D32] hover:text-white'
                  }`}
                >
                  Bu Rejani Bron Qilish
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}