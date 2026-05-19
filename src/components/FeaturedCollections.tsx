import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import ProductCard from './ProductCard';
import { getFeaturedProducts } from '../data/products';

export default function FeaturedCollections() {
  const featuredProducts = getFeaturedProducts();

  return (
    <section className="relative py-24 bg-[#FFFEF9] pattern-border-dense overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4A853]/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#7C2D12]/5 rounded-full translate-x-1/2 translate-y-1/2" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-[#D4A853]/10 rounded-full px-5 py-2 mb-6">
            <Sparkles size={16} className="text-[#D4A853]" />
            <span className="text-[#7C2D12] text-sm font-medium tracking-wide uppercase">Our Bestsellers</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#1C1917] mb-4">
            Featured Collections
          </h2>
          <p className="text-[#78716C] text-lg max-w-2xl mx-auto">
            Discover our most sought-after textile products, trusted by international buyers worldwide
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProducts.slice(0, 6).map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Link
            to="/products"
            className="group inline-flex items-center space-x-3 bg-[#1C1917] text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-[#7C2D12] transition-all hover:shadow-xl hover:shadow-[#1C1917]/20"
          >
            <span>View All Products</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}