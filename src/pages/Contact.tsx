import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, Clock, MessageCircle, Instagram, ExternalLink } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', phone: '', subject: '', message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

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
            <p className="text-[#D4A853] font-medium tracking-widest uppercase text-sm mb-4">Get In Touch</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-[#FFFEF9]/70 max-w-2xl">
              Have questions about our products or services? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-[#FFFEF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1 space-y-8"
            >
              <div>
                <h2 className="font-display text-2xl font-bold text-[#1C1917] mb-6">
                  Let's Start a Conversation
                </h2>
                <p className="text-[#78716C] leading-relaxed">
                  Whether you're looking for bulk orders, custom manufacturing, or have general inquiries – our team is here to help.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-[#D4A853]/10 flex items-center justify-center shrink-0">
                    <MapPin size={22} className="text-[#D4A853]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1C1917] mb-1">Office Address</h4>
                    <p className="text-[#78716C] text-sm">
                      Uttar Pradesh<br />
                       India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-[#D4A853]/10 flex items-center justify-center shrink-0">
                    <Phone size={22} className="text-[#D4A853]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1C1917] mb-1">Phone / WhatsApp</h4>
                    <a href="tel:+91 8433177160" className="block text-[#78716C] text-sm hover:text-[#D4A853] transition-colors">
                      +91 8433177160
                    </a>
                    <a href="tel:+91 8433177160" className="block text-[#78716C] text-sm hover:text-[#D4A853] transition-colors">
                     ----------
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-[#D4A853]/10 flex items-center justify-center shrink-0">
                    <Mail size={22} className="text-[#D4A853]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1C1917] mb-1">Email</h4>
                    <a href="mailto:craftweaveexports@gmail.com" className="block text-[#78716C] text-sm hover:text-[#D4A853] transition-colors">
                      craftweaveexports@gmail.com
                    </a>
                    <a href="mailto:craftweaveexports@gmail.com" className="block text-[#78716C] text-sm hover:text-[#D4A853] transition-colors">
                      ---------------
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-[#D4A853]/10 flex items-center justify-center shrink-0">
                    <Clock size={22} className="text-[#D4A853]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1C1917] mb-1">Business Hours</h4>
                    <p className="text-[#78716C] text-sm">
                      Monday - Saturday: 9:00 AM - 7:00 PM IST<br />
                      Sunday: 4:00 PM - 8:00 PM<br />
                      Response time: Within 2 hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t border-[#D4A853]/10">
                <h4 className="font-semibold text-[#1C1917] mb-4">Connect With Us</h4>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/8433177160"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-[#25D366] hover:underline"
                  >
                    <MessageCircle size={18} />
                    <span className="text-sm">Chat on WhatsApp</span>
                  </a>
                  <a
                    href="https://instagram.com/craftweave.co"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-[#E1306C] hover:underline"
                  >
                    <Instagram size={18} />
                    <span className="text-sm">Follow on Instagram</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl shadow-xl border border-[#D4A853]/10 p-8 md:p-10">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                      <Send size={36} className="text-green-600" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-[#1C1917] mb-2">Message Sent!</h3>
                    <p className="text-[#78716C]">We'll get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-[#1C1917] mb-2">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your full name"
                          className="w-full px-4 py-3.5 rounded-xl border border-[#D4A853]/20 focus:border-[#D4A853] focus:ring-2 focus:ring-[#D4A853]/20 outline-none transition-all text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#1C1917] mb-2">Company Name</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your company"
                          className="w-full px-4 py-3.5 rounded-xl border border-[#D4A853]/20 focus:border-[#D4A853] focus:ring-2 focus:ring-[#D4A853]/20 outline-none transition-all text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-[#1C1917] mb-2">Email Address *</label>
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
                        <label className="block text-sm font-medium text-[#1C1917] mb-2">Phone / WhatsApp *</label>
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
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#1C1917] mb-2">Subject</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl border border-[#D4A853]/20 focus:border-[#D4A853] focus:ring-2 focus:ring-[#D4A853]/20 outline-none transition-all text-sm bg-white"
                      >
                        <option value="">Select an inquiry type</option>
                        <option value="bulk-order">Bulk Order Inquiry</option>
                        <option value="custom-manufacturing">Custom Manufacturing</option>
                        <option value="pricing">Pricing Information</option>
                        <option value="samples">Sample Request</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#1C1917] mb-2">Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell us about your requirements..."
                        className="w-full px-4 py-3.5 rounded-xl border border-[#D4A853]/20 focus:border-[#D4A853] focus:ring-2 focus:ring-[#D4A853]/20 outline-none transition-all text-sm resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full btn-premium bg-gradient-to-r from-[#D4A853] to-[#B8860B] text-white py-4 rounded-xl font-semibold text-lg flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-[#D4A853]/30 transition-all"
                    >
                      <Send size={20} />
                      <span>Send Message</span>
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}