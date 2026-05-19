import { motion } from 'framer-motion';
import { Globe, Ship, Award, FileText, Shield, Clock } from 'lucide-react';

const exportFeatures = [
  { icon: Globe, title: 'Global Reach', desc: 'Global reach across all continents' },
  { icon: Ship, title: 'Sea & Air Freight', desc: 'Flexible shipping options' },
  { icon: Award, title: 'quality-focused', desc: 'we focus on quality' },
  { icon: FileText, title: 'Full Documentation', desc: 'Complete export paperwork' },
  { icon: Shield, title: 'Secure Payments', desc: 'LC, TT, trade finance options' },
  { icon: Clock, title: 'On-Time Delivery', desc: '98% on-time shipment record' },
];

const countries = [
  { name: 'USA', flag: '🇺🇸' },
  { name: 'UK', flag: '🇬🇧' },
  { name: 'Germany', flag: '🇩🇪' },
  { name: 'UAE', flag: '🇦🇪' },
  { name: 'Japan', flag: '🇯🇵' },
  { name: 'Australia', flag: '🇦🇺' },
  { name: 'Canada', flag: '🇨🇦' },
  { name: 'France', flag: '🇫🇷' },
  { name: 'Italy', flag: '🇮🇹' },
  { name: 'Spain', flag: '🇪🇸' },
  { name: 'S. Africa', flag: '🇿🇦' },
  { name: 'Brazil', flag: '🇧🇷' },
];

export default function GlobalExportSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#1C1917] to-[#292524] overflow-hidden">
      <div className="absolute inset-0 pattern-border opacity-5" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#FFFEF9] mb-4">
            Global Export <span className="text-[#D4A853]">Capabilities</span>
          </h2>
          <p className="text-[#FFFEF9]/60 text-lg max-w-2xl mx-auto">
            Comprehensive export services designed for international buyers
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {exportFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="text-center p-5 rounded-xl bg-[#FFFEF9]/5 border border-[#FFFEF9]/10 hover:border-[#D4A853]/30 transition-colors"
            >
              <feature.icon size={28} className="text-[#D4A853] mx-auto mb-3" />
              <h4 className="font-semibold text-[#FFFEF9] text-sm mb-1">{feature.title}</h4>
              <p className="text-[#FFFEF9]/40 text-xs">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Countries We Serve */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-[#FFFEF9]/40 uppercase tracking-widest text-xs mb-6">Countries We Export To</p>
          <div className="flex flex-wrap justify-center gap-4">
            {countries.map((country) => (
              <div
                key={country.name}
                className="flex items-center space-x-2 bg-[#FFFEF9]/5 border border-[#FFFEF9]/10 rounded-full px-5 py-2.5 hover:border-[#D4A853]/40 hover:bg-[#D4A853]/10 transition-all cursor-default"
              >
                <span className="text-xl">{country.flag}</span>
                <span className="text-[#FFFEF9]/80 text-sm font-medium">{country.name}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[#D4A853] text-sm">...and more countries worldwide</p>
        </motion.div>
      </div>
    </section>
  );
}