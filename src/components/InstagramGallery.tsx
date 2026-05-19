import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import cc1 from '../assets/products/cushion-covers/cc-001.png';
import cc2 from '../assets/products/cushion-covers/cc-002.png';
import cc3 from '../assets/products/cushion-covers/cc-003.png';
import cc4 from '../assets/products/cushion-covers/cc-004.png';
import cc5 from '../assets/products/cushion-covers/cc-005.png';
import cc6 from '../assets/products/cushion-covers/cc-006.png';
import cc7 from '../assets/products/cushion-covers/cc-007.png';
import cc8 from '../assets/products/cushion-covers/cc-008.png';

 const galleryImages = [
  { id: 1, src: cc1, alt: 'CC-001 Premium Cushion Cover' },
  { id: 2, src: cc2, alt: 'CC-002 Embroidered Cushion Cover' },
  { id: 3, src: cc3, alt: 'CC-003 Designer Cushion Cover' },
  { id: 4, src: cc4, alt: 'CC-004 Luxury Cushion Cover' },
  { id: 5, src: cc5, alt: 'CC-005 Decorative Cushion Cover' },
  { id: 6, src: cc6, alt: 'CC-006 Modern Cushion Cover' },
  { id: 7, src: cc7, alt: 'CC-007 Festive Cushion Cover' },
  { id: 8, src: cc8, alt: 'CC-008 Export Quality Cushion Cover' },
];


export default function InstagramGallery() {
  return (
    <section className="relative py-24 bg-[#FFFEF9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#833AB4]/10 via-[#FD1D1D]/10 to-[#F77737]/10 rounded-full px-5 py-2 mb-6">
            <Instagram size={16} className="text-[#E1306C]" />
            <span className="text-[#7C2D12] text-sm font-medium tracking-wide uppercase">@craftweave.co</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#1C1917] mb-4">
            Follow Our <span className="text-[#E1306C]">Instagram</span>
          </h2>
          <p className="text-[#78716C] text-lg max-w-2xl mx-auto">
            Stay inspired with our latest collections, behind-the-scenes craftsmanship, and design trends
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {galleryImages.map((image, index) => (
            <motion.a
              key={image.id}
              href="https://www.instagram.com/craftweave.co"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                <Instagram size={24} className="text-white" />
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Follow Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10"
        >
          <a
            href="https://www.instagram.com/craftweave.co"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-[#FD1D1D]/30 transition-all"
          >
            <Instagram size={20} />
            <span>Follow @craftweave.co</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}