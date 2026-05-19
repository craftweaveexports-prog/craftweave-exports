import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Download, FileText, User, Mail, Phone, MapPin, Package, Building2, MessageSquare, MessageCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function BulkInquiry() {
  const [formData, setFormData] = useState({
    companyName: '', contactPerson: '', email: '', phone: '', country: '', city: '', businessType: '', otherCountry: '', interestedProducts: [] as string[], quantity: '', timeline: '', message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  emailjs.send(
    'service_ouxqqa1',
    'template_vacsvku',
    {
      companyName: formData.companyName,
      contactPerson: formData.contactPerson,
      email: formData.email,
      phone: formData.phone,
      country:
        formData.country === 'Other'
          ? formData.otherCountry
          : formData.country,
      city: formData.city,
      businessType: formData.businessType,
      interestedProducts: formData.interestedProducts.join(', '),
      quantity: formData.quantity,
      timeline: formData.timeline,
      message: formData.message,
    },
    'pqyGmbueWwUN_8bRc'
  )
  .then(() => {
    setIsSubmitted(true);
  })
  .catch((error) => {
    console.error('FAILED...', error);
    alert('Something went wrong. Please try again.');
  });
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleProductToggle = (product: string) => {
    setFormData(prev => ({
      ...prev,
      interestedProducts: prev.interestedProducts.includes(product)
        ? prev.interestedProducts.filter(p => p !== product)
        : [...prev.interestedProducts, product]
    }));
  };

  const products = ['Cushion Covers', 'Bedsheets', 'Towels', 'Curtains', 'Hotel Linen', 'Blankets', 'Sofa Fabrics', 'Embroidered Fabrics', 'Custom Manufacturing'];

  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-[#1C1917] via-[#292524] to-[#1C1917] overflow-hidden">
        <div className="absolute inset-0 pattern-border opacity-5" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D4A853]/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center space-x-2 bg-[#D4A853]/10 border border-[#D4A853]/30 rounded-full px-5 py-2 mb-6">
              <Package size={16} className="text-[#D4A853]" />
              <span className="text-[#D4A853] text-sm font-medium">Wholesale Pricing</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Request a <span className="text-gradient-gold">Bulk Quote</span>
            </h1>
            <p className="text-lg text-[#FFFEF9]/70">
              Fill out the form below and receive a customized quote within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-[#FFFEF9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-2xl shadow-xl p-12 text-center"
              >
                <CheckCircle size={80} className="text-green-500 mx-auto mb-6" />
                <h2 className="font-display text-3xl font-bold text-[#1C1917] mb-4">Inquiry Submitted Successfully!</h2>
                <p className="text-[#78716C] text-lg mb-8 max-w-xl mx-auto">
                  Thank you for your interest in CRAFTWEAVE EXPORTS. Our export team will review your requirements and send a detailed quotation within 24 hours.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://wa.me/+91 8433177160"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-2 bg-[#25D366] text-white px-6 py-3 rounded-md font-medium hover:bg-[#20BD5A] transition-colors"
                  >
                    <Phone size={18} />
                    <span>WhatsApp Us Now</span>
                  </a>
                  <a
                    href="/products"
                    className="inline-flex items-center justify-center space-x-2 border-2 border-[#D4A853] text-[#7C2D12] px-6 py-3 rounded-md font-medium hover:bg-[#D4A853]/10 transition-colors"
                  >
                    <Package size={18} />
                    <span>Browse More Products</span>
                  </a>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl border border-[#D4A853]/10 p-8 md:p-12">
                <div className="mb-8 pb-8 border-b border-[#D4A853]/10">
                  <h2 className="font-display text-2xl font-bold text-[#1C1917] mb-2">Company Information</h2>
                  <p className="text-[#78716C] text-sm">Tell us about your business</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  <div>
                    <label className="flex items-center text-sm font-medium text-[#1C1917] mb-2">
                      <Building2 size={14} className="mr-2 text-[#D4A853]" />
                      Company Name *
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                      placeholder="Your registered company name"
                      className="w-full px-4 py-3.5 rounded-xl border border-[#D4A853]/20 focus:border-[#D4A853] focus:ring-2 focus:ring-[#D4A853]/20 outline-none transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="flex items-center text-sm font-medium text-[#1C1917] mb-2">
                      <User size={14} className="mr-2 text-[#D4A853]" />
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleChange}
                      required
                      placeholder="Full name of primary contact"
                      className="w-full px-4 py-3.5 rounded-xl border border-[#D4A853]/20 focus:border-[#D4A853] focus:ring-2 focus:ring-[#D4A853]/20 outline-none transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="flex items-center text-sm font-medium text-[#1C1917] mb-2">
                      <Mail size={14} className="mr-2 text-[#D4A853]" />
                      Business Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="email@company.com"
                      className="w-full px-4 py-3.5 rounded-xl border border-[#D4A853]/20 focus:border-[#D4A853] focus:ring-2 focus:ring-[#D4A853]/20 outline-none transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="flex items-center text-sm font-medium text-[#1C1917] mb-2">
                      <Phone size={14} className="mr-2 text-[#D4A853]" />
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+1 234 567 8900"
                      className="w-full px-4 py-3.5 rounded-xl border border-[#D4A853]/20 focus:border-[#D4A853] focus:ring-2 focus:ring-[#D4A853]/20 outline-none transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="flex items-center text-sm font-medium text-[#1C1917] mb-2">
                      <MapPin size={14} className="mr-2 text-[#D4A853]" />
                      Country *
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 rounded-xl border border-[#D4A853]/20 focus:border-[#D4A853] focus:ring-2 focus:ring-[#D4A853]/20 outline-none transition-all text-sm bg-white"
                    >
                      <option value="">Select Country</option>
                      {['United States', 'United Kingdom', 'Germany', 'France', 'Italy', 'Spain', 'Australia', 'Japan', 'UAE', 'Saudi Arabia', 'Canada', 'Netherlands', 'Belgium', 'Sweden', 'Switzerland', 'South Africa', 'Brazil', 'Mexico', 'Singapore', 'South Korea', 'Malaysia', 'Thailand', 'Indonesia', 'Philippines', 'New Zealand', 'Ireland', 'Denmark', 'Norway', 'Finland', 'Poland', 'Turkey', 'Israel', 'Egypt', 'Kenya', 'Nigeria', 'Ghana', 'Other'].map(c => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                    {formData.country === 'Other' && (
                      <input
                        type="text"
                        name="otherCountry"
                        value={formData.otherCountry || ''}
                        onChange={handleChange}
                        placeholder="Please enter your country"
                        className="w-full mt-3 px-4 py-3 rounded-lg border border-[#D4A853]/20 focus:border-[#D4A853] focus:ring-2 focus:ring-[#D4A853]/20 outline-none transition-all text-sm bg-white"
                      />
                    )}
                  </div>
                  <div>
                    <label className="flex items-center text-sm font-medium text-[#1C1917] mb-2">
                      <Building2 size={14} className="mr-2 text-[#D4A853]" />
                      Business Type
                    </label>
                    <select
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl border border-[#D4A853]/20 focus:border-[#D4A853] focus:ring-2 focus:ring-[#D4A853]/20 outline-none transition-all text-sm bg-white"
                    >
                      <option value="">Select Type</option>
                      <option value="wholesaler">Wholesaler / Distributor</option>
                      <option value="retailer">Retailer / E-commerce</option>
                      <option value="hotel">Hotel / Hospitality</option>
                      <option value="interior">Interior Designer</option>
                      <option value="manufacturer">Manufacturer</option>
                      <option value="importer">Importer / Trading Company</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="mb-8 pb-8 border-b border-[#D4A853]/10">
                  <h2 className="font-display text-2xl font-bold text-[#1C1917] mb-2">Product Requirements</h2>
                  <p className="text-[#78716C] text-sm">What are you interested in?</p>
                </div>

                {/* Product Selection */}
                <div className="mb-8">
                  <label className="block text-sm font-medium text-[#1C1917] mb-3">Interested Products (Select all that apply)</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {products.map(product => (
                      <button
                        key={product}
                        type="button"
                        onClick={() => handleProductToggle(product)}
                        className={`p-3 rounded-xl border text-sm font-medium transition-all ${formData.interestedProducts.includes(product)
                            ? 'border-[#D4A853] bg-[#D4A853]/10 text-[#7C2D12]'
                            : 'border-[#D4A853]/20 text-[#78716C] hover:border-[#D4A853]/40'
                          }`}
                      >
                        {formData.interestedProducts.includes(product) && <CheckCircle size={14} className="inline mr-1 text-[#D4A853]" />}
                        {product}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  <div>
                    <label className="block text-sm font-medium text-[#1C1917] mb-2">Estimated Quantity</label>
                    <select
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl border border-[#D4A853]/20 focus:border-[#D4A853] focus:ring-2 focus:ring-[#D4A853]/20 outline-none transition-all text-sm bg-white"
                    >
                      <option value="">Select Range</option>
                      <option value="100-500">100 - 500 units</option>
                      <option value="500-1000">500 - 1,000 units</option>
                      <option value="1000-5000">1,000 - 5,000 units</option>
                      <option value="5000-10000">5,000 - 10,000 units</option>
                      <option value="10000+">10,000+ units</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1C1917] mb-2">Expected Delivery Timeline</label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl border border-[#D4A853]/20 focus:border-[#D4A853] focus:ring-2 focus:ring-[#D4A853]/20 outline-none transition-all text-sm bg-white"
                    >
                      <option value="">Select Timeline</option>
                      <option value="urgent">Urgent (Within 2 weeks)</option>
                      <option value="1-month">Within 1 month</option>
                      <option value="2-months">Within 2 months</option>
                      <option value="3-months">Within 3 months</option>
                      <option value="flexible">Flexible / Ongoing</option>
                    </select>
                  </div>
                </div>

                <div className="mb-8">
                  <label className="flex items-center text-sm font-medium text-[#1C1917] mb-2">
                    <MessageSquare size={14} className="mr-2 text-[#D4A853]" />
                    Additional Requirements
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about customization needs, specific materials, branding requirements, certifications needed..."
                    className="w-full px-4 py-3.5 rounded-xl border border-[#D4A853]/20 focus:border-[#D4A853] focus:ring-2 focus:ring-[#D4A853]/20 outline-none transition-all text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-premium bg-gradient-to-r from-[#D4A853] to-[#B8860B] text-white py-4 rounded-xl font-semibold text-lg flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-[#D4A853]/30 transition-all"
                >
                  <Send size={22} />
                  <span>Submit Bulk Inquiry</span>
                </button>

                <p className="mt-4 text-center text-xs text-[#78716C]">
                  By submitting this form, you agree to our{' '}
                  <a href="/terms-conditions" className="text-[#D4A853] hover:underline">Terms & Conditions</a>
                  {' '}and{' '}
                  <a href="/privacy-policy" className="text-[#D4A853] hover:underline">Privacy Policy</a>
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-[#F5F0EB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-6">
            <a
              href="#"
              className="group flex items-center space-x-4 bg-white rounded-xl p-6 shadow-sm border border-[#D4A853]/10 hover:border-[#D4A853]/30 hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                <FileText size={28} className="text-red-500" />
              </div>
              <div>
                <h4 className="font-semibold text-[#1C1917] group-hover:text-[#D4A853] transition-colors">Download Catalog PDF</h4>
                <p className="text-sm text-[#78716C]">Complete product catalog with pricing</p>
              </div>
              <Download size={20} className="ml-auto text-[#D4A853] shrink-0" />
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-4 bg-white rounded-xl p-6 shadow-sm border border-[#D4A853]/10 hover:border-[#25D366]/30 hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-green-50 flex items-center justify-center shrink-0">
                <Phone size={28} className="text-green-500" />
              </div>
              <div>
                <h4 className="font-semibold text-[#1C1917] group-hover:text-[#25D366] transition-colors">Quick WhatsApp Quote</h4>
                <p className="text-sm text-[#78716C]">Get instant response within minutes</p>
              </div>
              <MessageCircle size={20} className="ml-auto text-[#25D366] shrink-0" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}