import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal, Grid3X3, LayoutGrid } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { categories as allCategories } from '../data/categories';

export default function Products() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'large'>('grid');

  const filteredProducts = products.filter(product => {
   const matchesSearch =
  product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
  product.productCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
  product.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categoryOptions = ['All', ...new Set(products.map(p => p.category))];

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
            <p className="text-[#D4A853] font-medium tracking-widest uppercase text-sm mb-4">Our Collection</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Premium Textile <span className="text-[#D4A853]">Products</span>
            </h1>
            <p className="text-lg text-[#FFFEF9]/70 max-w-2xl">
              Explore our comprehensive range of export-quality textiles for wholesale buyers, hotels, retailers, and interior designers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters & Products */}
      <section className="py-16 bg-[#FFFEF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search & Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg border border-[#D4A853]/10 p-6 mb-10"
          >
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#78716C]" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-[#D4A853]/20 focus:border-[#D4A853] focus:ring-2 focus:ring-[#D4A853]/20 outline-none transition-all text-sm bg-[#FAF6F1]"
                />
              </div>
              
              {/* Category Filter */}
              <div className="relative">
                <SlidersHorizontal size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#78716C]" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="appearance-none pl-11 pr-10 py-3.5 rounded-xl border border-[#D4A853]/20 focus:border-[#D4A853] outline-none transition-all text-sm bg-[#FAF6F1] min-w-[220px] cursor-pointer"
                >
                  {categoryOptions.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              {/* View Toggle */}
              <div className="flex items-center space-x-2 bg-[#F5F0EB] rounded-xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2.5 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-white shadow-sm text-[#D4A853]' : 'text-[#78716C]'}`}
                >
                  <Grid3X3 size={18} />
                </button>
                <button
                  onClick={() => setViewMode('large')}
                  className={`p-2.5 rounded-lg transition-colors ${viewMode === 'large' ? 'bg-white shadow-sm text-[#D4A853]' : 'text-[#78716C]'}`}
                >
                  <LayoutGrid size={18} />
                </button>
              </div>
            </div>

            {/* Results Count */}
            <div className="mt-4 flex items-center justify-between text-sm">
              <p className="text-[#78716C]">
                Showing <span className="font-semibold text-[#1C1917]">{filteredProducts.length}</span> products
                {selectedCategory !== 'All' && (
                  <span> in <span className="text-[#D4A853] font-medium">{selectedCategory}</span></span>
                )}
              </p>
              {(searchTerm || selectedCategory !== 'All') && (
                <button
                  onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
                  className="text-[#D4A853] hover:text-[#7C2D12] font-medium"
                >
                  Clear filters
                </button>
              )}
            </div>
          </motion.div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className={`grid gap-8 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 md:grid-cols-2'}`}>
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <Search size={64} className="text-[#D4A853]/30 mx-auto mb-4" />
              <h3 className="font-display text-2xl font-bold text-[#1C1917] mb-2">No products found</h3>
              <p className="text-[#78716C] mb-6">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
                className="btn-premium bg-[#D4A853] text-white px-6 py-3 rounded-md font-medium"
              >
                View All Products
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
}