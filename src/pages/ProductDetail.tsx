import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft, Package, Ruler, Palette, Clock, Shield, Award,
  CheckCircle, Share2, Heart, Download, MessageCircle, Send
} from 'lucide-react';
import InquiryModal from '../components/InquiryModal';
import { products } from '../data/products';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || '');
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  
  if (!product) {
    return (
      <main className="pt-32 pb-20 min-h-screen bg-[#FFFEF9]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-display text-3xl font-bold text-[#1C1917] mb-4">Product Not Found</h1>
          <p className="text-[#78716C] mb-8">The product you're looking for doesn't exist.</p>
          <Link to="/products" className="btn-premium bg-[#D4A853] text-white px-6 py-3 rounded-md font-medium">
                View All Products
              </Link>
        </div>
      </main>
    );
  }

  return (
    <main>
      {/* Breadcrumb */}
      <section className="pt-28 pb-8 bg-[#F5F0EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center space-x-2 text-sm text-[#78716C]">
            <Link to="/" className="hover:text-[#D4A853] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-[#D4A853] transition-colors">Products</Link>
            <span>/</span>
            <Link to={`/products?category=${product.category.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-[#D4A853] transition-colors">
              {product.category}
            </Link>
            <span>/</span>
            <span className="text-[#1C1917] font-medium truncate max-w-[200px]">{product.name}</span>
          </motion.div>
        </div>
      </section>

      {/* Product Content */}
      <section className="py-12 bg-[#FFFEF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[450px] object-cover"
                />
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.exportReady && (
                    <span className="bg-green-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center">
                      <Shield size={12} className="mr-1" /> Export Ready
                    </span>
                  )}
                  {product.featured && (
                    <span className="bg-[#D4A853] text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                      Featured
                    </span>
                  )}
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex space-x-3">
                <button className="flex-1 flex items-center justify-center space-x-2 py-3 rounded-xl border border-[#D4A853]/20 hover:border-[#D4A853] hover:bg-[#D4A853]/5 transition-all text-sm font-medium">
                  <Share2 size={18} />
                  <span>Share</span>
                </button>
                <button className="flex-1 flex items-center justify-center space-x-2 py-3 rounded-xl border border-[#D4A853]/20 hover:border-[#D4A853] hover:bg-[#D4A853]/5 transition-all text-sm font-medium">
                  <Heart size={18} />
                  <span>Save</span>
                </button>
                <button className="flex-1 flex items-center justify-center space-x-2 py-3 rounded-xl border border-[#D4A853]/20 hover:border-[#D4A853] hover:bg-[#D4A853]/5 transition-all text-sm font-medium">
                  <Download size={18} />
                  <span>Download Specs</span>
                </button>
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="mb-6">
                <span className="inline-block bg-[#D4A853]/10 text-[#7C2D12] text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  {product.category}
                </span>
                <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#1C1917] mb-4 leading-tight">
                  {product.name}
                </h1>
                <p className="text-lg text-[#78716C] leading-relaxed mb-6">
                  {product.description}
                </p>
              </div>

              {/* Price & MOQ */}
              <div className="bg-gradient-to-r from-[#F5F0EB] to-[#FAF6F1] rounded-xl p-6 mb-8">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs text-[#78716C] uppercase tracking-wide mb-1">Price Range</p>
                    <p className="font-display text-2xl font-bold text-[#7C2D12]">{product.priceRange}</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#78716C] uppercase tracking-wide mb-1">Minimum Order</p>
                    <p className="font-display text-2xl font-bold text-[#7C2D12]">{product.moq.toLocaleString()} pcs</p>
                  </div>
                </div>
              </div>

              {/* Material */}
              <div className="mb-8">
                <h3 className="font-heading text-lg font-semibold text-[#1C1917] mb-3">Material</h3>
                <p className="text-[#78716C] bg-[#F5F0EB] rounded-lg p-4 text-sm">
                  {product.material}
                </p>
              </div>

              {/* Sizes */}
              <div className="mb-8">
                <h3 className="font-heading text-lg font-semibold text-[#1C1917] mb-3 flex items-center">
                  <Ruler size={18} className="mr-2 text-[#D4A853]" />
                  Available Sizes
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                        selectedSize === size
                          ? 'bg-[#D4A853] text-white'
                          : 'bg-[#F5F0EB] text-[#78716C] hover:bg-[#D4A853]/10'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Colors */}
              <div className="mb-8">
                <h3 className="font-heading text-lg font-semibold text-[#1C1917] mb-3 flex items-center">
                  <Palette size={18} className="mr-2 text-[#D4A853]" />
                  Available Colors ({product.colors.length})
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map(color => (
                    <span key={color} className="px-4 py-2 bg-[#F5F0EB] rounded-lg text-sm text-[#78716C]">
                      {color}
                    </span>
                  ))}
                </div>
              </div>

              {/* Lead Time */}
              <div className="flex items-center space-x-6 mb-8 pb-8 border-b border-[#D4A853]/10">
                <div className="flex items-center space-x-2 text-[#78716C]">
                  <Clock size={18} className="text-[#D4A853]" />
                  <span className="text-sm"><strong className="text-[#1C1917]">Lead Time:</strong> {product.leadTime}</span>
                </div>
                {product.customization && (
                  <div className="flex items-center space-x-2 text-[#78716C]">
                    <Award size={18} className="text-[#D4A853]" />
                    <span className="text-sm"><strong className="text-[#1C1917]">Customization:</strong> Available</span>
                  </div>
                )}
              </div>

              {/* Certifications */}
              <div className="mb-8">
                <h3 className="font-heading text-lg font-semibold text-[#1C1917] mb-3">Certifications</h3>
                <div className="flex flex-wrap gap-2">
                  {product.certifications.map(cert => (
                    <span key={cert} className="inline-flex items-center space-x-1 px-3 py-1.5 bg-green-50 text-green-700 rounded-full text-xs font-medium">
                      <CheckCircle size={12} />
                      <span>{cert}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4">
                <button
                  onClick={() => setIsInquiryOpen(true)}
                  className="w-full btn-premium bg-gradient-to-r from-[#D4A853] to-[#B8860B] text-white py-4 rounded-xl font-semibold text-lg flex items-center justify-center space-x-2 hover:shadow-xl hover:shadow-[#D4A853]/30 transition-all"
                >
                  <Send size={22} />
                  <span>Request Bulk Quote</span>
                </button>
                <a
                  href={`https://wa.me/+91 8433177160?text=${encodeURIComponent(`Hi! I'm interested in: ${product.name}. Please share pricing and MOQ details.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 bg-[#25D366] text-white py-4 rounded-xl font-semibold text-lg hover:bg-[#20BD5A] transition-colors"
                >
                  <MessageCircle size={22} />
                  <span>Inquire via WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Long Description */}
          {product.longDescription && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-16 bg-white rounded-2xl shadow-sm border border-[#D4A853]/10 p-8 md:p-12"
            >
              <h2 className="font-display text-2xl font-bold text-[#1C1917] mb-6">About This Product</h2>
              <p className="text-[#78716C] leading-relaxed text-lg">{product.longDescription}</p>
            </motion.div>
          )}

          {/* Related Products */}
          <div className="mt-16">
            <h2 className="font-display text-2xl font-bold text-[#1C1917] mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3).map((related) => (
                <Link key={related.id} to={`/products/${related.id}`} className="group bg-white rounded-xl overflow-hidden shadow-sm border border-[#D4A853]/10 hover:border-[#D4A853]/30 hover:shadow-lg transition-all">
                  <div className="h-48 overflow-hidden">
                    <img src={related.image} alt={related.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading font-semibold text-[#1C1917] group-hover:text-[#7C2D12] transition-colors line-clamp-2">{related.name}</h3>
                    <p className="text-[#D4A853] font-medium mt-2">{related.priceRange.split('-')[0]}+</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Modal */}
      <InquiryModal isOpen={isInquiryOpen} onClose={() => setIsInquiryOpen(false)} productName={product.name} />
    </main>
  );
}