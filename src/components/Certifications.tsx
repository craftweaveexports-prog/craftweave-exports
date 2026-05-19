import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';

const certifications = [
  { name: '', desc: 'Quality Management System', icon: '🏆' },
  { name: '', desc: 'Textile Safety Certification', icon: '✓' },
  { name: '', desc: 'Global Organic Textile Standard', icon: '🌿' },
  { name: '', desc: 'Ethical Sourcing Verified', icon: '🤝' },
  { name: '', desc: 'Authentic Handicraft Mark', icon: '🎨' },
  { name: '', desc: 'Government Recognized', icon: '🇮🇳' },
];

export default function Certifications() {
  return (
    <section className="py-16 bg-[#FFFEF9] border-y border-[#D4A853]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group text-center p-5 rounded-xl bg-white border border-[#D4A853]/10 hover:border-[#D4A853]/30 hover:shadow-lg transition-all"
            >
              <span className="text-3xl mb-3 block group-hover:scale-110 transition-transform">{cert.icon}</span>
              <div className="flex items-center justify-center gap-1 mb-1">
                <BadgeCheck size={14} className="text-green-500" />
                <h4 className="font-semibold text-[#1C1917] text-sm">{cert.name}</h4>
              </div>
              <p className="text-[#78716C] text-xs">{cert.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}