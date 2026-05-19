import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqItems } from '../data/faq';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('faq001');

  return (
    <section className="relative py-24 bg-[#FAF6F1] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-[#D4A853]/10 rounded-full px-5 py-2 mb-6">
            <HelpCircle size={16} className="text-[#D4A853]" />
            <span className="text-[#7C2D12] text-sm font-medium tracking-wide uppercase">Got Questions?</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#1C1917] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[#78716C] text-lg">
            Everything you need to know about working with CRAFTWEAVE EXPORTS
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#D4A853]/10"
            >
              <button
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-[#F5F0EB]/50 transition-colors"
              >
                <span className="font-heading text-lg font-semibold text-[#1C1917] pr-4">
                  {item.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`shrink-0 text-[#D4A853] transition-transform duration-300 ${
                    openId === item.id ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {openId === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-[#78716C] leading-relaxed border-t border-[#D4A853]/10 pt-4">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}