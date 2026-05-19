import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Package } from 'lucide-react';
import { categories } from '../data/categories';

export default function Categories() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-[#1C1917] overflow-hidden">
        <div className="absolute inset-0 pattern-border opacity-5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#D4A853] font-medium tracking-widest uppercase text-sm mb-4">Browse By Category</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Product Categories
            </h1>
            <p className="text-lg text-[#FFFEF9]/70 max-w-2xl">
              Explore our diverse range of textile categories designed for every market segment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 bg-[#FFFEF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
              >
                <Link
                  to={`/products?category=${category.slug}`}
                  className="group block bg-white rounded-2xl overflow-hidden shadow-sm border border-[#D4A853]/10 hover:border-[#D4A853]/30 hover:shadow-xl transition-all duration-500"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    
                    {/* Product Count Badge */}
                    <div className="absolute bottom-4 left-4 flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5">
                      <Package size={14} className="text-[#D4A853]" />
                      <span className="text-xs font-medium text-[#1C1917]">{category.productCount} Products</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-heading text-lg font-semibold text-[#1C1917] group-hover:text-[#7C2D12] transition-colors mb-2">
                      {category.name}
                    </h3>
                    <p className="text-[#78716C] text-sm line-clamp-2 mb-4">
                      {category.description}
                    </p>
                    <div className="flex items-center text-[#D4A853] text-sm font-medium group-hover:gap-2 transition-all">
                      <span>Browse Collection</span>
                      <ArrowRight size={16} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-1 transition-all" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}