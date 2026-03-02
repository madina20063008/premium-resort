import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Phone, Mail, MessageCircle, Calendar, Users, Send, Instagram, Facebook, Twitter } from 'lucide-react';

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        checkIn: '',
        checkOut: '',
        guests: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#2E7D32] font-['Poppins'] tracking-wider uppercase text-sm">
            Qolishingizni Bron Qiling
          </span>
          <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] text-[#1B263B] mt-2 mb-4">
            Biz Bilan Bog'laning
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-px bg-[#FFD54F]" />
            <div className="w-2 h-2 rounded-full bg-[#FFD54F]" />
            <div className="w-16 h-px bg-[#FFD54F]" />
          </div>
          <p className="text-[#1B263B]/60 font-['Poppins'] max-w-2xl mx-auto text-lg">
            Tabiat jannatini his qilishga tayyormisiz? Quyidagi formani to'ldiring yoki to'g'ridan-to'g'ri biz bilan bog'laning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Contact Info - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="md:col-span-2 space-y-6"
          >
            <div>
              <h3 className="text-2xl font-['Playfair_Display'] text-[#1B263B] mb-6">
                Aloqa Ma'lumotlari
              </h3>

              {/* Phone */}
              <div className="flex items-start gap-4 mb-6 p-4 bg-[#F5F7FA] rounded-xl hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0D3B66] to-[#2E7D32] flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-[#1B263B]/60 font-['Poppins'] mb-1">
                    Telefon
                  </p>
                  <a
                    href="tel:+998918096666"
                    className="text-[#1B263B] font-['Poppins'] hover:text-[#0D3B66]"
                  >
                    +998 91 809 66 66
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 mb-6 p-4 bg-[#F5F7FA] rounded-xl hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0D3B66] to-[#2E7D32] flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-[#1B263B]/60 font-['Poppins'] mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:info@qorabuloqplaza.com"
                    className="text-[#1B263B] font-['Poppins'] hover:text-[#0D3B66]"
                  >
                    info@qorabuloqplaza.com
                  </a>
                </div>
              </div>

              {/* Telegram */}
              <div className="flex items-start gap-4 p-4 bg-[#F5F7FA] rounded-xl hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0D3B66] to-[#2E7D32] flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-[#1B263B]/60 font-['Poppins'] mb-1">
                    Telegram
                  </p>
                  <a
                    href="http://t.me/qorabuloq_plaza"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1B263B] font-['Poppins'] hover:text-[#0D3B66]"
                  >
                    @qorabuloq_plaza
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <p className="text-sm text-[#1B263B]/60 font-['Poppins'] mb-4">
                Ijtimoiy tarmoqlarda bizni kuzatib boring
              </p>
              <div className="flex gap-3">
                <button className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0D3B66] to-[#2E7D32] text-white flex items-center justify-center hover:shadow-lg transition-all">
                  <Instagram size={20} />
                </button>
                <button className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0D3B66] to-[#2E7D32] text-white flex items-center justify-center hover:shadow-lg transition-all">
                  <Facebook size={20} />
                </button>
                <button className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0D3B66] to-[#2E7D32] text-white flex items-center justify-center hover:shadow-lg transition-all">
                  <Twitter size={20} />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Booking Form - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Phone */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#1B263B] font-['Poppins'] mb-2">
                    To'liq Ism *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#F5F7FA] border border-transparent focus:border-[#0D3B66] focus:outline-none transition-all font-['Poppins']"
                    placeholder="Anvar Karimov"
                  />
                </div>
                <div>
                  <label className="block text-[#1B263B] font-['Poppins'] mb-2">
                    Telefon Raqam *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#F5F7FA] border border-transparent focus:border-[#0D3B66] focus:outline-none transition-all font-['Poppins']"
                    placeholder="+998 (90) 123-45-67"
                  />
                </div>
              </div>

              {/* Check-in & Check-out */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#1B263B] font-['Poppins'] mb-2 flex items-center gap-2">
                    <Calendar size={16} />
                    Check-in Date *
                  </label>
                  <input
                    type="date"
                    name="checkIn"
                    required
                    value={formData.checkIn}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#F5F7FA] border border-transparent focus:border-[#0D3B66] focus:outline-none transition-all font-['Poppins']"
                  />
                </div>
                <div>
                  <label className="block text-[#1B263B] font-['Poppins'] mb-2 flex items-center gap-2">
                    <Calendar size={16} />
                    Check-out Date *
                  </label>
                  <input
                    type="date"
                    name="checkOut"
                    required
                    value={formData.checkOut}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#F5F7FA] border border-transparent focus:border-[#0D3B66] focus:outline-none transition-all font-['Poppins']"
                  />
                </div>
              </div>

              {/* Number of Guests */}
              <div>
                <label className="block text-[#1B263B] font-['Poppins'] mb-2 flex items-center gap-2">
                  <Users size={16} />
                  Mehmonlar Soni *
                </label>
                <select
                  name="guests"
                  required
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#F5F7FA] border border-transparent focus:border-[#0D3B66] focus:outline-none transition-all font-['Poppins']"
                >
                  <option value="">Mehmonlar sonini tanlang</option>
                  <option value="1-20">1-20 Mehmon</option>
                  <option value="20+">20+ Mehmon</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-[#1B263B] font-['Poppins'] mb-2">
                  Maxsus So'rovlar (Ixtiyoriy)
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#F5F7FA] border border-transparent focus:border-[#0D3B66] focus:outline-none transition-all font-['Poppins'] resize-none"
                  placeholder="Maxsus so'rovlar yoki savollaringiz bormi?"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitted}
                className={`w-full py-4 rounded-xl transition-all flex items-center justify-center gap-2 ${
                  submitted
                    ? 'bg-[#2E7D32] text-white'
                    : 'bg-gradient-to-r from-[#0D3B66] to-[#2E7D32] text-white shadow-lg hover:shadow-2xl'
                }`}
              >
                {submitted ? (
                  <>
                    <span className="font-['Poppins']">Bron So'rovi Yuborildi!</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span className="font-['Poppins']">Bron So'rovini Yuborish</span>
                  </>
                )}
              </button>

              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-[#2E7D32] font-['Poppins'] text-sm"
                >
                  Rahmat! Tez orada bron qilishni tasdiqlash uchun siz bilan bog'lanamiz.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}