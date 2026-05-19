import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle, Package, User, Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
}

export default function InquiryModal({ isOpen, onClose, productName }: InquiryModalProps) {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    country: '',
    quantity: '',
    message: productName ? `I am interested in: ${productName}` : '',
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
      country: formData.country,
      quantity: formData.quantity,
      message: formData.message,
    },
    'pqyGmbueWwUN_8bRc'
  )
  .then(() => {
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      onClose();

      setFormData({
        companyName: '',
        contactPerson: '',
        email: '',
        phone: '',
        country: '',
        quantity: '',
        message: ''
      });

    }, 3000);
  })
  .catch((error) => {
    console.error(error);
    alert('Failed to send inquiry.');
  });
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#1C1917] to-[#292524] p-6 rounded-t-2xl relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <X size={18} className="text-white" />
              </button>
              <h3 className="font-display text-2xl font-bold text-white">Request Bulk Quote</h3>
              <p className="text-[#FFFEF9]/60 text-sm mt-1">Get customized pricing for your order</p>
            </div>

            {/* Content */}
            <div className="p-6">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
                  <h4 className="font-display text-2xl font-bold text-[#1C1917] mb-2">Thank You!</h4>
                  <p className="text-[#78716C]">Our team will contact you within 24 hours with a detailed quote.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-lg border border-[#D4A853]/20 focus:border-[#D4A853] focus:ring-2 focus:ring-[#D4A853]/20 outline-none transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="flex items-center text-sm font-medium text-[#1C1917] mb-2">
                        <Package size={14} className="mr-2 text-[#D4A853]" />
                        Company Name *
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                        placeholder="Your company"
                        className="w-full px-4 py-3 rounded-lg border border-[#D4A853]/20 focus:border-[#D4A853] focus:ring-2 focus:ring-[#D4A853]/20 outline-none transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="flex items-center text-sm font-medium text-[#1C1917] mb-2">
                        <Mail size={14} className="mr-2 text-[#D4A853]" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="email@company.com"
                        className="w-full px-4 py-3 rounded-lg border border-[#D4A853]/20 focus:border-[#D4A853] focus:ring-2 focus:ring-[#D4A853]/20 outline-none transition-all text-sm"
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
                        className="w-full px-4 py-3 rounded-lg border border-[#D4A853]/20 focus:border-[#D4A853] focus:ring-2 focus:ring-[#D4A853]/20 outline-none transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="flex items-center text-sm font-medium text-[#1C1917] mb-2">
                        <MapPin size={14} className="mr-2 text-[#D4A853]" />
                        Country *
                      </label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                        placeholder="Enter Your Country"
                        className="w-full px-4 py-3 rounded-lg border border-[#D4A853]/20 focus:border-[#D4A853] focus:ring-2 focus:ring-[#D4A853]/20 outline-none transition-all text-sm bg-white"
                       />
                        <option value="">Select Country</option>
                        <option value="US">United States</option>
                        <option value="UK">United Kingdom</option>
                        <option value="DE">Germany</option>
                        <option value="FR">France</option>
                        <option value="IT">Italy</option>
                        <option value="ES">Spain</option>
                        <option value="AU">Australia</option>
                        <option value="JP">Japan</option>
                        <option value="AE">UAE</option>
                        <option value="SA">Saudi Arabia</option>
                        <option value="ZA">South Africa</option>
                        <option value="CA">Canada</option>
                        <option value="NG">Nigeria</option>
                        <option value="OTHER">Other</option>
                      <input type="text" />
                    </div>
                    <div>
                      <label className="flex items-center text-sm font-medium text-[#1C1917] mb-2">
                        <Package size={14} className="mr-2 text-[#D4A853]" />
                        Estimated Quantity
                      </label>
                      <select
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-[#D4A853]/20 focus:border-[#D4A853] focus:ring-2 focus:ring-[#D4A853]/20 outline-none transition-all text-sm bg-white"
                      >
                        <option value="">Select Range</option>
                        <option value="100-500">100 - 500 units</option>
                        <option value="500-1000">500 - 1,000 units</option>
                        <option value="1000-5000">1,000 - 5,000 units</option>
                        <option value="5000+">5,000+ units</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="flex items-center text-sm font-medium text-[#1C1917] mb-2">
                      <MessageSquare size={14} className="mr-2 text-[#D4A853]" />
                      Message / Requirements
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your requirements, customization needs, delivery timeline..."
                      className="w-full px-4 py-3 rounded-lg border border-[#D4A853]/20 focus:border-[#D4A853] focus:ring-2 focus:ring-[#D4A853]/20 outline-none transition-all text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-premium bg-gradient-to-r from-[#D4A853] to-[#B8860B] text-white py-4 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-[#D4A853]/30 transition-all"
                  >
                    <Send size={18} />
                    <span>Submit Inquiry</span>
                  </button>

                  <p className="text-xs text-center text-[#78716C]">
                    By submitting, you agree to our{' '}
                    <a href="/terms-conditions" className="text-[#D4A853] hover:underline">Terms & Conditions</a>
                    {' '}and{' '}
                    <a href="/privacy-policy" className="text-[#D4A853] hover:underline">Privacy Policy</a>
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}