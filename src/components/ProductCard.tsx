import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Package, Ruler, Palette, Eye, ArrowRight } from 'lucide-react';
import { Product } from '../lib/types';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group card-luxury bg-white rounded-2xl overflow-hidden shadow-lg border border-[#D4A853]/10"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
          <Link
            to={`/products/${product.id}`}
            className="btn-premium bg-[#D4A853] text-white px-5 py-2.5 rounded-md text-sm font-medium flex items-center space-x-2 hover:bg-[#B8860B] transition-colors"
          >
            <Eye size={16} />
            <span>View Details</span>
          </Link>
        </div>

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.featured && (
            <span className="bg-[#D4A853] text-white text-xs font-semibold px-3 py-1 rounded-full">
              Featured
            </span>
          )}
          {product.trending && (
            <span className="bg-[#E07B39] text-white text-xs font-semibold px-3 py-1 rounded-full">
              Trending
            </span>
          )}
          {product.exportReady && (
            <span className="bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center">
              <Package size={10} className="mr-1" />
              Export Ready
            </span>
          )}
        </div>

        {/* Category Tag */}
        <div className="absolute top-4 right-4">
          <span className="bg-white/90 backdrop-blur-sm text-[#7C2D12] text-xs font-medium px-3 py-1 rounded-full">
            {product.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-heading text-xl font-semibold text-[#1C1917] mb-2 line-clamp-2 group-hover:text-[#7C2D12] transition-colors">
          {product.name}
        </h3>
        <p className="text-[#78716C] text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Specs Row */}
        <div className="flex flex-wrap gap-3 mb-4">

          {/* Sizes */}
          <div className="flex items-center space-x-1.5 text-xs text-[#78716C] bg-[#F5F0EB] px-3 py-1.5 rounded-full">
            <Ruler size={12} />
            <span>{product.sizes.length} Sizes</span>
          </div>

          {/* Colors */}
          <div className="flex items-center space-x-1.5 text-xs text-[#78716C] bg-[#F5F0EB] px-3 py-1.5 rounded-full">
            <Palette size={12} />
            <span>{product.colors.length} Colors</span>
          </div>

          {/* MOQ */}
          <div className="flex items-center space-x-1.5 text-xs text-[#7C2D12] bg-[#7C2D12]/5 px-3 py-1.5 rounded-full font-medium">
            <Package size={12} />
            <span>MOQ: {product.moq}</span>
          </div>

          {/* Product Code */}
          <div className="flex items-center space-x-1.5 text-xs text-[#7C2D12] bg-[#7C2D12]/5 px-3 py-1.5 rounded-full font-medium">
            <Package size={12} />
            <span>{product.productCode}</span>
          </div>

        </div>
        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-[#D4A853]/10">
          <div>
            <p className="text-xs text-[#78716C]">Starting from</p>
            <p className="font-display text-lg font-bold text-[#7C2D12]">{product.priceRange.split('-')[0]}</p>
          </div>
          <Link
            to={`/bulk-inquiry?product=${product.id}`}
            className="btn-premium group/btn flex items-center space-x-2 bg-[#1C1917] text-white px-4 py-2.5 rounded-md text-sm font-medium hover:bg-[#7C2D12] transition-colors"
          >
            <span>Get Quote</span>
            <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}