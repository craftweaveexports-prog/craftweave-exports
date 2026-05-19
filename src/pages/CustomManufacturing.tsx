import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Palette, Scissors, Truck, CheckCircle, Layers, Tag, Ruler, Clock, Shield, Sparkles } from 'lucide-react';

const steps = [
  { icon: Palette, title: 'Design Consultation', desc: 'Share your vision – colors, patterns, materials, and brand guidelines.' },
  { icon: Layers, title: 'Material Sourcing', desc: 'We source premium raw materials matching your specifications exactly.' },
  { icon: Scissors, title: 'Sampling', desc: 'Receive physical samples for approval before mass production begins.' },
  { icon: Tag, title: 'Branding & Packaging', desc: 'Custom labels, hang tags, packaging with your brand identity.' },
  { icon: Truck, title: 'Production & QC', desc: 'Mass production with rigorous multi-stage quality control.' },
  { icon: Shield, title: 'Shipping & Documentation', desc: 'Complete export documentation and reliable global logistics.' },
];

const capabilities = [
  'Private Label Manufacturing',
  'OEM Production',
  'Custom Print Development',
  'Exclusive Design Creation',
  'Fabric Development',
  'Color Matching (Pantone)',
  'Custom Sizing',
  'Branded Packaging',
  'Compliance Testing',
  'Small MOQ Options',
];

export default function CustomManufacturing() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#1C1917] via-[#292524] to-[#1C1917] overflow-hidden">
        <div className="absolute inset-0 pattern-border opacity-5" />
        <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-[#D4A853]/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-[#D4A853]/10 border border-[#D4A853]/30 rounded-full px-5 py-2 mb-6">
                <Sparkles size={16} className="text-[#D4A853]" />
                <span className="text-[#D4A853] text-sm font-medium">Bespoke Solutions</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Custom Textile
                <br />
                <span className="text-gradient-gold">Manufacturing</span>
              </h1>
              <p className="text-lg text-[#FFFEF9]/70 leading-relaxed mb-8 max-w-xl">
                Bring your unique textile vision to life with our end-to-end custom manufacturing service. From concept to container, we handle everything – design development, sampling, production, quality control, and global shipping.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/bulk-inquiry"
                  className="btn-premium group inline-flex items-center space-x-3 bg-gradient-to-r from-[#D4A853] to-[#B8860B] text-white px-8 py-4 rounded-md font-semibold hover:shadow-xl hover:shadow-[#D4A853]/30 transition-all"
                >
                  <span>Start Your Project</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 border-2 border-[#FFFEF9]/20 text-white px-8 py-4 rounded-md font-semibold hover:border-[#D4A853] hover:text-[#D4A853] transition-all"
                >
                  <Ruler size={20} />
                  <span>Discuss Requirements</span>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <img
                  src="/images/factory.jpg"
                  alt="VAYU TEXTILES Factory"
                  className="rounded-2xl shadow-2xl w-full h-[450px] object-cover"
                />
                <div className="absolute -bottom-6 -left-6 glass rounded-xl p-6 shadow-xl">
                  <div className="flex items-center space-x-4">
                    <Clock size={32} className="text-[#D4A853]" />
                    <div>
                      <p className="font-display text-2xl font-bold text-[#1C1917]">8-12 Weeks</p>
                      <p className="text-sm text-[#78716C]">Concept to Delivery</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 bg-[#FFFEF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl font-bold text-[#1C1917] mb-4">
              How Custom Manufacturing Works
            </h2>
            <p className="text-[#78716C] text-lg max-w-2xl mx-auto">
              A streamlined process designed for efficiency and excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-white rounded-2xl p-8 shadow-sm border border-[#D4A853]/10 hover:border-[#D4A853]/30 hover:shadow-lg transition-all group"
              >
                <div className="absolute -top-4 left-8 w-8 h-8 rounded-full bg-[#D4A853] flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
                <div className="w-14 h-14 rounded-xl bg-[#D4A853]/10 flex items-center justify-center mb-5 mt-2 group-hover:bg-[#D4A853] transition-colors">
                  <step.icon size={28} className="text-[#7C2D12] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-[#1C1917] mb-3">{step.title}</h3>
                <p className="text-[#78716C] leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-[#1C1917]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-4xl font-bold text-white mb-6">
                Our Customization Capabilities
              </h2>
              <p className="text-[#FFFEF9]/70 text-lg mb-8">
                Whatever your vision, we have the expertise and infrastructure to bring it to life.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {capabilities.map((cap) => (
                  <div key={cap} className="flex items-center space-x-3">
                    <CheckCircle size={18} className="text-[#D4A853] shrink-0" />
                    <span className="text-[#FFFEF9]/80 text-sm">{cap}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#FFFEF9]/5 rounded-2xl p-8 border border-[#FFFEF9]/10"
            >
              <h3 className="font-display text-2xl font-bold text-white mb-6">MOQ Guidelines</h3>
              <div className="space-y-4">
                {[{item: 'Standard Products (Existing Designs)', moq: '100-300 pieces/SKU'}, {item: 'Custom Prints/Patterms', moq: '300-500 pieces/SKU'}, {item: 'Fully Custom Products', moq: '500+ pieces/SKU'}, {item: 'Private Label Program', moq: '300 pieces/SKU'}, {item: 'Fabric Development', moq: '1,000+ meters'}].map(row => (
                  <div key={row.item} className="flex justify-between items-center py-3 border-b border-[#FFFEF9]/10 last:border-0">
                    <span className="text-[#FFFEF9]/70 text-sm">{row.item}</span>
                    <span className="text-[#D4A853] font-semibold text-sm">{row.moq}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-[#FFFEF9]/40 text-xs">
                * MOQ can be negotiated based on order volume and long-term partnership potential.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#7C2D12] via-[#991B1B] to-[#7C2D12]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Create Something Unique?
            </h2>
            <p className="text-[#FFFEF9]/80 text-lg mb-8 max-w-2xl mx-auto">
              Share your design brief and let our team prepare a customized proposal for your project.
            </p>
            <Link
              to="/bulk-inquiry"
              className="group inline-flex items-center space-x-3 btn-premium bg-white text-[#7C2D12] px-10 py-4 rounded-md font-semibold text-lg hover:shadow-xl transition-all"
            >
              <span>Request Custom Quote</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}