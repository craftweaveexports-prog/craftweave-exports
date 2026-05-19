import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Ship, FileText, Shield, Globe, Package, CheckCircle, Award, Clock, HeadphonesIcon as Headphones } from 'lucide-react';

const services = [
  {
    icon: Ship,
    title: 'Global Shipping Support',
    desc: 'Support for international shipping and export coordination for bulk textile orders.',
    features: [
      'Sea Freight Support',
      'Air Cargo Options',
      'Export Coordination',
      'Order Tracking Assistance'
    ]
  },

  {
    icon: FileText,
    title: 'Export Documentation',
    desc: 'Assistance with export-related documentation and shipment paperwork.',
    features: [
      'Commercial Invoice',
      'Packing List',
      'Shipping Documents',
      'Buyer Coordination'
    ]
  },

  {
    icon: Shield,
    title: 'Quality Focus',
    desc: 'Attention to product finishing, packaging, and consistency for export orders.',
    features: [
      'Quality Checks',
      'Clean Packaging',
      'Product Inspection',
      'Bulk Order Support'
    ]
  },

  {
    icon: Package,
    title: 'Custom Manufacturing',
    desc: 'Flexible support for customized textile products and bulk production requirements.',
    features: [
      'Custom Designs',
      'Private Label Support',
      'Bulk Manufacturing',
      'Flexible Order Quantities'
    ]
  },

  {
    icon: Globe,
    title: 'International Buyer Support',
    desc: 'Communication and coordination support for overseas buyers and sourcing businesses.',
    features: [
      'Buyer Communication',
      'Order Updates',
      'Product Discussions',
      'Inquiry Assistance'
    ]
  },

  {
    icon: Headphones,
    title: 'Dedicated Assistance',
    desc: 'Focused support for inquiries, customization discussions, and order coordination.',
    features: [
      'Quick Responses',
      'Inquiry Handling',
      'Order Coordination',
      'After-Sales Support'
    ]
  },
];

const exportStats = [
  { value: 'Custom', label: 'Manufacturing', icon: Globe },

  { value: 'Bulk', label: 'Order Support', icon: Clock },

  { value: 'Global', label: 'Buyer Focus', icon: Shield },

  { value: 'Modern', label: 'Textile Designs', icon: Award },
];

export default function ExportServices() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#1C1917] overflow-hidden">
        <div className="absolute inset-0 pattern-border opacity-5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4A853]/5 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center space-x-2 bg-[#D4A853]/10 border border-[#D4A853]/30 rounded-full px-5 py-2 mb-6">
              <Globe size={16} className="text-[#D4A853]" />
              <span className="text-[#D4A853] text-sm font-medium">Global Reach</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Export Services &<br />
              <span className="text-gradient-gold">Logistics Support</span>
            </h1>
           <p className="text-lg text-[#FFFEF9]/70 leading-relaxed">
  We provide export support for bulk textile inquiries, customized manufacturing, 
  and international order coordination. Our focus is on smooth communication, 
  quality products, and reliable support for global buyers.
</p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-[#D4A853] relative -mt-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {exportStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon size={28} className="text-white/80 mx-auto mb-2" />
                <p className="font-display text-3xl sm:text-4xl font-bold text-white">{stat.value}</p>
                <p className="text-white/70 text-sm uppercase tracking-wide">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-[#FFFEF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-[#D4A853]/10 hover:border-[#D4A853]/30 hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-[#D4A853]/10 flex items-center justify-center mb-5 group-hover:bg-[#D4A853] transition-colors">
                  <service.icon size={28} className="text-[#7C2D12] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-[#1C1917] mb-3">{service.title}</h3>
                <p className="text-[#78716C] text-sm mb-5 leading-relaxed">{service.desc}</p>
                <ul className="space-y-2">
                  {service.features.map(feature => (
                    <li key={feature} className="flex items-center space-x-2 text-sm text-[#78716C]">
                      <CheckCircle size={14} className="text-[#D4A853] shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Export Process */}
      <section className="py-24 bg-[#F5F0EB]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl font-bold text-[#1C1917] mb-4">
              The Export Process
            </h2>
            <p className="text-[#78716C] text-lg">
              A clear roadmap from inquiry to delivery
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#D4A853]/20 hidden md:block" style={{ transform: 'translateY(-50%)' }} />
            <div className="grid md:grid-cols-5 gap-8">
              {[
                { step: '1', title: 'Inquiry', desc: 'Share requirements & get quote' },
                { step: '2', title: 'Sampling', desc: 'Approve samples & finalize specs' },
                { step: '3', title: 'Production', desc: 'Manufacturing & QC checks' },
                { step: '4', title: 'Documentation', desc: 'Prepare all export papers' },
                { step: '5', title: 'Delivery', desc: 'Ship & track to destination' },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-[#D4A853] text-white font-display text-xl font-bold flex items-center justify-center mx-auto mb-4 relative z-10">
                    {item.step}
                  </div>
                  <h4 className="font-semibold text-[#1C1917] mb-1">{item.title}</h4>
                  <p className="text-sm text-[#78716C]">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1C1917]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Ship size={48} className="text-[#D4A853] mx-auto mb-6" />
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              Start Your Import Journey
            </h2>
            <p className="text-[#FFFEF9]/70 text-lg mb-8 max-w-2xl mx-auto">
              Whether you're a first-time importer or an experienced buyer, our export team makes the process effortless.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/bulk-inquiry"
                className="group inline-flex items-center space-x-3 btn-premium bg-gradient-to-r from-[#D4A853] to-[#B8860B] text-white px-8 py-4 rounded-md font-semibold hover:shadow-xl hover:shadow-[#D4A853]/30 transition-all"
              >
                <span>Start Import Inquiry</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://wa.me/+91 8433177160"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 border-2 border-[#FFFEF9]/20 text-white px-8 py-4 rounded-md font-semibold hover:border-[#D4A853] transition-all"
              >
                <Headphones size={20} />
                <span>Talk to Export Team</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}