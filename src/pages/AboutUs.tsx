import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, Users, Globe, Target, Heart, Eye, ArrowRight, CheckCircle } from 'lucide-react';

const milestones = [
  {
    year: '2024',
    title: 'CraftWeave Exports Started',
    desc: 'Started with a focus on premium home textile products for global buyers.',
  },
  {
    year: '2024',
    title: 'Product Development',
    desc: 'Developed modern cushion covers, embroidered textiles, and custom textile collections.',
  },
  {
    year: '2024',
    title: 'Global Inquiry Support',
    desc: 'Began connecting with international buyers through digital platforms and direct inquiries.',
  },
  {
    year: '2025',
    title: 'Custom Manufacturing Focus',
    desc: 'Expanded capabilities for customized textile designs and bulk order support.',
  },
  {
    year: '2025',
    title: 'Growing Export Network',
    desc: 'Building relationships with buyers, sourcing partners, and textile businesses worldwide.',
  },
];
const values = [
  {
    icon: Heart,
    title: 'Quality Focused',
    desc: 'We prioritize quality materials, clean finishing, and attention to detail in every product.',
  },
  {
    icon: Users,
    title: 'Customer Relationships',
    desc: 'We believe in clear communication, reliable support, and long-term business partnerships.',
  },
  {
    icon: Globe,
    title: 'Global Vision',
    desc: 'Our products are designed to meet the preferences of international home textile markets.',
  },
  {
    icon: Target,
    title: 'Flexible Manufacturing',
    desc: 'We support customized designs, bulk orders, and tailored production requirements.',
  },
  {
    icon: Eye,
    title: 'Modern Design',
    desc: 'We combine modern styling with textile craftsmanship to create export-ready collections.',
  },
  {
    icon: Award,
    title: 'Professional Commitment',
    desc: 'We are committed to consistent quality, honest business practices, and continuous improvement.',
  },
];

export default function AboutUs() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#1C1917] overflow-hidden">
        <div className="absolute inset-0 pattern-border opacity-5" />
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#D4A853]/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
           <p className="text-[#D4A853] font-medium tracking-widest uppercase text-sm mb-4">
  About CraftWeave Exports
</p>

<h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
  Premium Indian Home<br />
  <span className="text-gradient-gold">Textile Supplier</span>
</h1>

<p className="text-lg text-[#FFFEF9]/70 leading-relaxed">
  CraftWeave Exports focuses on premium cushion covers, embroidered textiles, 
  bedsheets, and custom home textile products designed for global buyers. 
  We combine modern styling, quality craftsmanship, and flexible manufacturing 
  support for bulk textile inquiries.
</p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-[#FFFEF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/images/craftsmanship.jpg"
                alt="Indian Artisan at Work"
                className="rounded-2xl shadow-2xl w-full h-[450px] object-cover"
              />
              <div className="mt-6 flex items-center space-x-8 p-6 bg-white rounded-xl shadow-lg border border-[#D4A853]/10">
                <div className="text-center">
                  <p className="font-display text-3xl font-bold text-[#D4A853]">Custom</p>
                  <p className="text-xs text-[#78716C] uppercase tracking-wide">Manufacturing</p>
                </div>
                <div className="w-px h-12 bg-[#D4A853]/20" />
                <div className="text-center">
                  <p className="font-display text-3xl font-bold text-[#D4A853]">Bulk</p>
                  <p className="text-xs text-[#78716C] uppercase tracking-wide">Order Support</p>
                </div>
                <div className="w-px h-12 bg-[#D4A853]/20" />
                <div className="text-center">
                  <p className="font-display text-3xl font-bold text-[#D4A853]">Global</p>
                  <p className="text-xs text-[#78716C] uppercase tracking-wide">Buyer Focus</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1C1917] mb-6">
                Our Heritage of Handcrafted Excellence
              </h2>
              <div className="space-y-4 text-[#78716C] leading-relaxed">
                <p>
                  CraftWeave Exports focuses on premium home textile products including cushion covers, embroidered textiles, bedsheets, and custom textile collections designed for international buyers
                </p>
                
                <p>
                   Our approach combines modern design preferences with detailed textile craftsmanship to create products suitable for global markets. We focus on quality materials, clean finishing, customization flexibility, and reliable communication for bulk textile inquiries.
                </p>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-3">
                {['Family Owned', '3rd Generation', 'Artisan Empowerment', 'Sustainable Practices'].map(tag => (
                  <span key={tag} className="px-4 py-2 bg-[#D4A853]/10 text-[#7C2D12] rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#F5F0EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl font-bold text-[#1C1917] mb-4">
              Our Core Values
            </h2>
            <p className="text-[#78716C] text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-[#D4A853]/10 hover:border-[#D4A853]/30 hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-[#D4A853]/10 flex items-center justify-center mb-5 group-hover:bg-[#D4A853] group-hover:text-white transition-colors">
                  <value.icon size={28} className="text-[#7C2D12] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-[#1C1917] mb-3">{value.title}</h3>
                <p className="text-[#78716C] leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-[#1C1917]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl font-bold text-white mb-4">
              Our Journey
            </h2>
            <p className="text-[#FFFEF9]/60 text-lg">
              Key milestones in our growth story
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#D4A853] via-[#D4A853]/50 to-transparent hidden md:block" />
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex items-center mb-10 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-[#FFFEF9]/5 backdrop-blur-sm rounded-xl p-6 border border-[#FFFEF9]/10 inline-block">
                    <span className="text-[#D4A853] font-display text-2xl font-bold">{milestone.year}</span>
                    <h4 className="text-white font-semibold mt-1">{milestone.title}</h4>
                    <p className="text-[#FFFEF9]/50 text-sm mt-1">{milestone.desc}</p>
                  </div>
                </div>
                
                <div className="hidden md:flex w-12 h-12 rounded-full bg-[#D4A853] items-center justify-center shrink-0 z-10 relative">
                  <CheckCircle size={24} className="text-white" />
                </div>
                
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#FAF6F1]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1C1917] mb-4">
              Ready to Partner With Us?
            </h2>
            <p className="text-[#78716C] text-lg mb-8 max-w-2xl mx-auto">
              Join our global businesses family, everyone who trust CraftWeave Exports for their textile needs.
            </p>
            <Link
              to="/bulk-inquiry"
              className="group inline-flex items-center space-x-3 btn-premium bg-gradient-to-r from-[#D4A853] to-[#B8860B] text-white px-10 py-4 rounded-md font-semibold text-lg hover:shadow-xl hover:shadow-[#D4A853]/30 transition-all"
            >
              <span>Start Your Inquiry</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}