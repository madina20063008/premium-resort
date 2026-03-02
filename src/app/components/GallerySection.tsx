import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1600257729950-13a634d32697?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHJpdmVyJTIwbmF0dXJlJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc3MDg4Mjk1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Mountain River',
    },
    {
      url: 'https://images.unsplash.com/photo-1759281944533-a9eea164ffe3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb3VudGFpbiUyMHJlc29ydCUyMGNhYmlufGVufDF8fHx8MTc3MDg4Mjk1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Resort Exterior',
    },
    {
      url: 'https://images.unsplash.com/photo-1768413292047-116be08f120c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwbHV4dXJ5JTIwY2FiaW4lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzA4ODI5NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Interior',
    },
    {
      url: 'https://images.unsplash.com/photo-1668900030471-170e936b201a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZSUyMHNjZW5pYyUyMHZpZXd8ZW58MXx8fHwxNzcwODgzMDkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Scenic Mountain View',
    },
    {
      url: 'https://images.unsplash.com/photo-1574971111480-79ab853865f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib25maXJlJTIwbmlnaHQlMjBtb3VudGFpbnN8ZW58MXx8fHwxNzcwODgyOTU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Bonfire Night',
    },
    {
      url: 'https://images.unsplash.com/photo-1767453444484-cf1e77c22c65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjBuYXR1cmUlMjBjYWJpbiUyMHdvb2RzfGVufDF8fHx8MTc3MDg4MzA5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Forest Surroundings',
    },
  ];

  // Split images into rows
  const row1Images = [...images, ...images]; // Duplicate for infinite scroll
  const row2Images = [...images.slice(3), ...images.slice(0, 3), ...images.slice(3), ...images.slice(0, 3)];
  const row3Images = [...images.slice(2), ...images.slice(0, 2), ...images.slice(2), ...images.slice(0, 2)];

  return (
    <section id="gallery" ref={ref} className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-[#2E7D32] font-['Poppins'] tracking-wider uppercase text-sm">
            Foto Galereya
          </span>
          <h2 className="text-4xl md:text-5xl font-['Playfair_Display'] text-[#1B263B] mt-2 mb-4">
            Lahzalarni Qayd Eting
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-px bg-[#FFD54F]" />
            <div className="w-2 h-2 rounded-full bg-[#FFD54F]" />
            <div className="w-16 h-px bg-[#FFD54F]" />
          </div>
          <p className="text-[#1B263B]/60 font-['Poppins'] max-w-2xl mx-auto text-lg">
            Qorabuloq Plaza atrofidagi go'zallikni bu hayratlanarli fotosuratlar orqali o'rganing.
          </p>
        </motion.div>
      </div>

      {/* Multi-row Scrolling Carousel */}
      <div className="space-y-6">
        {/* Row 1 - Scrolling Right to Left */}
        <motion.div
          className="flex gap-6"
          animate={{
            x: [0, -1800],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
        >
          {row1Images.map((image, index) => (
            <div
              key={`row1-${index}`}
              className="flex-shrink-0 w-[400px] h-[300px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
            >
              <ImageWithFallback
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>

        {/* Row 2 - Scrolling Right to Left (slower) */}
        <motion.div
          className="flex gap-6"
          animate={{
            x: [0, -1800],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 50,
              ease: "linear",
            },
          }}
        >
          {row2Images.map((image, index) => (
            <div
              key={`row2-${index}`}
              className="flex-shrink-0 w-[400px] h-[300px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
            >
              <ImageWithFallback
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}