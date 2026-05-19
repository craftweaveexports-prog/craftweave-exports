import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="relative py-24 bg-[#F5F0EB] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4A853]/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Quote size={48} className="text-[#D4A853]/30 mx-auto mb-4" />
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#1C1917] mb-4">
            Real <span className="text-[#D4A853]">perfection</span>
          </h2>
          <p className="text-[#78716C] text-lg max-w-2xl mx-auto">
            Premium Home Textile Exporter
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-3xl shadow-xl p-8 md:p-12 min-h-[320px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={24} className="text-[#D4A853] fill-[#D4A853]" />
                  ))}
                </div>

                {/* Quote Text */}
                <blockquote className="font-heading text-xl md:text-2xl text-[#1C1917] leading-relaxed mb-8 italic">
                  "{t.text}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-[#D4A853]/30"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=D4A853&color=fff`;
                    }}
                  />
                  <div className="text-left">
                    <p className="font-semibold text-[#1C1917]">{t.name}</p>
                    <p className="text-sm text-[#78716C]">{t.company}</p>
                    <p className="text-xs text-[#D4A853]">📍 {t.country}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center mt-8 space-x-4">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full bg-[#F5F0EB] flex items-center justify-center hover:bg-[#D4A853] hover:text-white transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      current === idx ? 'bg-[#D4A853] w-8' : 'bg-[#D4A853]/30'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={next}
                className="w-10 h-10 rounded-full bg-[#F5F0EB] flex items-center justify-center hover:bg-[#D4A853] hover:text-white transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}