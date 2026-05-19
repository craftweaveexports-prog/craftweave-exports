import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Sparkles } from 'lucide-react';

export default function Newsletter() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    window.location.href = '/contact';
  };

  return (
    <section className="py-20 bg-gradient-to-r from-[#7C2D12] via-[#991B1B] to-[#7C2D12] relative overflow-hidden">
      <div className="absolute inset-0 pattern-border opacity-10" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Sparkles size={32} className="text-[#D4A853] mx-auto mb-4" />
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Get In Touch For Bulk Textile Orders
          </h2>
          <p className="text-[#FFFEF9]/80 text-lg mb-8 max-w-2xl mx-auto">
            Contact us for bulk textile inquiries, customized manufacturing, and export-related discussions. We are happy to assist global buyers and sourcing businesses.
          </p>

          <form onSubmit={handleSubmit} className="flex justify-center">
            <button
              type="submit"
              className="btn-premium bg-[#D4A853] text-white px-8 py-4 rounded-md font-semibold hover:bg-[#B8860B] transition-colors"
            >
              Contact Us
            </button>
          </form>

          <p className="mt-4 text-white/50 text-xs">
           Focused on quality products, reliable communication, and long-term business relationships.
          </p>
        </motion.div>
      </div>
    </section>
  );
}