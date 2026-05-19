import { motion } from 'framer-motion';
import { ShieldCheck, Palette, DollarSign, Globe, HandMetal, ClipboardCheck } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Export Quality',
    description: 'Every product meets rigorous international quality standards with full certification compliance.',
    color: '#D4A853',
  },
  {
    icon: Palette,
    title: 'Custom Designs',
    description: 'From concept to creation – our design team brings your unique vision to life with precision.',
    color: '#7C2D12',
  },
  {
    icon: DollarSign,
    title: 'Competitive Pricing',
    description: 'Direct-from-manufacturer pricing without middlemen. Maximum value for your investment.',
    color: '#E07B39',
  },
  {
    icon: Globe,
    title: 'Worldwide Shipping',
    description: 'Reliable logistics network for best deals.',
    color: '#059669',
  },
  {
    icon: HandMetal,
    title: 'Handmade Excellence',
    description: 'Centuries-old craftsmanship passed through generations of skilled Indian artisans.',
    color: '#7C3AED',
  },
  {
    icon: ClipboardCheck,
    title: 'Strict Quality Control',
    description: 'Multi-stage inspection process ensuring less than 1% defect rate on every shipment.',
    color: '#DC2626',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 bg-[#1C1917] overflow-hidden">
      {/* Pattern Background */}
      <div className="absolute inset-0 pattern-border opacity-5" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#D4A853]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#7C2D12]/15 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#FFFEF9] mb-4">
            Why Choose <span className="text-[#D4A853]">CRAFTWEAVE EXPORTS</span>
          </h2>
          <p className="text-[#FFFEF9]/60 text-lg max-w-2xl mx-auto">
            The perfection in work by our artisans is breath taking, and premium
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-[#FFFEF9]/5 backdrop-blur-sm rounded-2xl p-8 border border-[#FFFEF9]/10 hover:border-[#D4A853]/30 transition-all duration-500 hover:bg-[#FFFEF9]/10"
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${feature.color}20` }}
              >
                <feature.icon size={28} style={{ color: feature.color }} />
              </div>
              
              <h3 className="font-heading text-xl font-semibold text-[#FFFEF9] mb-3 group-hover:text-[#D4A853] transition-colors">
                {feature.title}
              </h3>
              <p className="text-[#FFFEF9]/50 leading-relaxed">
                {feature.description}
              </p>
              
              {/* Hover Glow */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: `0 0 40px ${feature.color}15` }}
              />
            </motion.div>
          ))}
        </div>

        {/* Made in India Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-[#FF9933]/20 via-white/10 to-[#138808]/20 rounded-full px-8 py-4 border border-[#D4A853]/20">
            <span className="text-3xl">🇮🇳</span>
            <div className="text-left">
              <p className="text-[#FFFEF9] font-semibold">Proudly Made in India</p>
              <p className="text-[#FFFEF9]/50 text-sm">Professional & export-oriented</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}