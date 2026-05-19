import { motion } from 'framer-motion';
import { Search, Scissors, Package, Truck, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Search,
    step: '01',
    title: 'Design & Development',
    description: 'Our design team creates custom patterns, develops fabric samples, and refines specifications based on your requirements.',
  },
  {
    icon: Scissors,
    step: '02',
    title: 'Sourcing & Production',
    description: 'Premium raw materials sourced directly from certified suppliers. Production in our state-of-the-art facility with skilled artisans.',
  },
  {
    icon: CheckCircle,
    step: '03',
    title: 'Quality Assurance',
    description: 'Multi-stage inspection including raw material checks, in-process QC, and pre-shipment inspection by third-party agencies.',
  },
  {
    icon: Package,
    step: '04',
    title: 'Packaging & Labeling',
    description: 'Professional packaging with custom branding, barcodes, care labels, and export-compliant documentation.',
  },
  {
    icon: Truck,
    step: '05',
    title: 'Shipping & Delivery',
    description: 'End-to-end logistics management via sea or air freight with real-time tracking and customs clearance support.',
  },
];

export default function ManufacturingProcess() {
  return (
    <section className="relative py-24 bg-[#FAF6F1] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/factory.jpg"
                alt="VAYU TEXTILES Manufacturing Facility"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/60 to-transparent" />
              
              {/* Overlay Stats */}
              <div className="absolute bottom-6 left-6 right-6 glass rounded-xl p-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  
                  <div>
                    <p className="font-display text-2xl font-bold text-[#D4A853]">perfection</p>
                    <p className="text-xs text-[#1C1917]/70">Skilled Artisans</p>
                  </div>
                  <div>
                    <p className="font-display text-2xl font-bold text-[#D4A853]">modern</p>
                    <p className="text-xs text-[#1C1917]/70">Modern Indian Textile Supplier</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-[#D4A853]/30 rounded-2xl" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-[#7C2D12]/30 rounded-2xl" />
          </motion.div>

          {/* Right - Process Steps */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#D4A853] font-medium tracking-widest uppercase text-sm mb-3">Our Process</p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#1C1917] mb-4">
                From Raw Material<br />to Your Warehouse
              </h2>
              <p className="text-[#78716C] text-lg mb-10">
                A transparent manufacturing process that ensures quality at every stage
              </p>
            </motion.div>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="group flex gap-5"
                >
                  <div className="shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-white shadow-lg flex items-center justify-center group-hover:bg-[#D4A853] transition-colors duration-300">
                      <step.icon size={24} className="text-[#7C2D12] group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <div className="pb-6 border-b border-[#D4A853]/10 last:border-0">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-[#D4A853] font-display text-lg font-bold">{step.step}</span>
                      <h3 className="font-heading text-lg font-semibold text-[#1C1917]">{step.title}</h3>
                    </div>
                    <p className="text-[#78716C] text-sm leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}