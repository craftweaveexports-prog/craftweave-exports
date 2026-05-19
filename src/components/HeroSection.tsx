import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Award, Ship, Users } from 'lucide-react';
import heroImg from '../assets/products/background.png';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Luxury Indian Textiles"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1917]/95 via-[#1C1917]/80 to-[#1C1917]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917] via-transparent to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#D4A853]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#7C2D12]/10 rounded-full blur-3xl" />
      
      {/* Indian Pattern Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full pattern-border opacity-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-[#D4A853]/10 border border-[#D4A853]/30 rounded-full px-5 py-2 mb-8"
            >
              <Award size={16} className="text-[#D4A853]" />
              <span className="text-[#D4A853] text-sm font-medium tracking-wide">
                Crafted For Global Markets
              </span>
            </motion.div>

            {/* Main Heading */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              <span className="text-[#FFFEF9]">Global Textile</span>
              <br />
              <span className="text-gradient-gold animate-shimmer">Export Partner</span>
              <br />
              <span className="text-[#FFFEF9]">From India</span>
            </h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg sm:text-xl text-[#FFFEF9]/70 leading-relaxed mb-10 max-w-xl"
            >
              Bulk Orders • Custom Manufacturing • Worldwide Shipping
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link
                to="/products"
                className="btn-premium group inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-[#D4A853] to-[#B8860B] text-white px-8 py-4 rounded-md font-semibold text-lg hover:shadow-2xl hover:shadow-[#D4A853]/30 transition-all"
              >
                <span>View Collection</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/bulk-inquiry"
                className="group inline-flex items-center justify-center space-x-3 border-2 border-[#D4A853]/50 text-[#FFFEF9] px-8 py-4 rounded-md font-semibold text-lg hover:bg-[#D4A853]/10 hover:border-[#D4A853] transition-all"
              >
                <span>Contact for Bulk Orders</span>
              </Link>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-[#FFFEF9]/10"
            >
              {[
                { icon: Users, value: 'Growing', label: 'Export Network' },
                { icon: Ship, value: 'Worldwide', label: 'Buyer Support' },
                { icon: Award, value: 'Custom', label: 'Production' },
              ].map((stat, idx) => (
                <div key={idx} className="text-center sm:text-left">
                  <stat.icon size={22} className="text-[#D4A853] mb-2 mx-auto sm:mx-0" />
                  <div className="font-display text-2xl sm:text-3xl font-bold text-[#FFFEF9]">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-[#FFFEF9]/50 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Floating Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="hidden lg:block relative"
          >
            <div className="relative">
              {/* Main Image Card */}
              <div className="glass rounded-2xl p-3 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  src="/images/cushion-covers.jpg"
                  alt="Luxury Cushion Covers"
                  className="rounded-xl w-full h-[400px] object-cover"
                />
              </div>
              
              {/* Floating Badge 1 */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-16 top-20 glass rounded-xl p-4 shadow-xl"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                    <span className="text-green-400 text-xl">✓</span>
                  </div>
                  <div>
                    <p className="text-[#FFFEF9] font-semibold text-sm">Export Quality</p>
                    <p className="text-[#FFFEF9]/50 text-xs">Certified Products</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge 2 */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -right-8 bottom-32 glass rounded-xl p-4 shadow-xl"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-[#D4A853]/20 flex items-center justify-center">
                    <Ship size={24} className="text-[#D4A853]" />
                  </div>
                  <div>
                    <p className="text-[#FFFEF9] font-semibold text-sm">Worldwide Shipping</p>
                    <p className="text-[#FFFEF9]/50 text-xs">able to ship worldwide</p>
                  </div>
                </div>
              </motion.div>

              {/* Play Video Button */}
              <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[#D4A853] flex items-center justify-center shadow-2xl shadow-[#D4A853]/30 hover:scale-110 transition-transform">
                <Play size={28} className="text-white ml-1" fill="white" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-[#FFFEF9]/30 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-[#D4A853]"
          />
        </div>
      </motion.div>
    </section>
  );
}