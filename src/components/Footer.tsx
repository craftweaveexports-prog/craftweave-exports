import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Globe,
  ArrowRight,
  Heart,
  Send,
} from 'lucide-react';

import logo from '../assets/logos/logo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleContactClick = (e: React.FormEvent) => {
    e.preventDefault();

    window.location.href = '/contact';
  };

  return (
    <footer className="relative bg-[#1C1917] text-[#FFFEF9]">
      {/* Decorative Top Border */}
      <div className="h-1 bg-gradient-to-r from-[#7C2D12] via-[#D4A853] to-[#E07B39]" />

      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-border opacity-5 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6">

              <img
                src={logo}
                alt="CraftWeave Exports Logo"
                className="w-14 h-14 object-contain"
              />

              <div>
                <h3 className="font-display text-xl font-semibold tracking-wider">
                  CRAFTWEAVE EXPORTS
                </h3>

                <p className="text-xs tracking-[0.2em] text-[#D4A853] uppercase">
                  INDIA
                </p>
              </div>
            </Link>

            <p className="text-[#FFFEF9]/60 leading-relaxed mb-6 text-sm">
              CraftWeave Exports specializes in premium home textile products
              including cushion covers, bedsheets, embroidered textiles,
              hotel linen, and customized textile manufacturing for
              global wholesale buyers.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">

              <a
                href="https://instagram.com/craftweave.co"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#FFFEF9]/10 flex items-center justify-center hover:bg-[#D4A853] transition-colors"
              >
                <Instagram size={18} />
              </a>

              <a
                href="mailto:craftweaveexports@gmail.com"
                className="w-10 h-10 rounded-full bg-[#FFFEF9]/10 flex items-center justify-center hover:bg-[#D4A853] transition-colors"
              >
                <Mail size={18} />
              </a>

              <a
                href="https://wa.me/918433177160"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center hover:bg-[#20BD5A] transition-colors"
              >
                <Phone size={18} />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 text-[#D4A853]">
              Quick Links
            </h4>

            <ul className="space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Products', href: '/products' },
                { label: 'Categories', href: '/categories' },
                { label: 'Export Services', href: '/export-services' },
                { label: 'Custom Manufacturing', href: '/custom-manufacturing' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-[#FFFEF9]/60 hover:text-[#D4A853] transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight
                      size={14}
                      className="mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all"
                    />

                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 text-[#D4A853]">
              Products
            </h4>

            <ul className="space-y-3">
              {[
                'Cushion Covers',
                'Bedsheets',
                'Hotel Linen',
                'Curtains',
                'Table Linen',
                'Embroidered Fabrics',
              ].map((cat) => (
                <li key={cat}>
                  <Link
                    to="/products"
                    className="text-[#FFFEF9]/60 hover:text-[#D4A853] transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight
                      size={14}
                      className="mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all"
                    />

                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 text-[#D4A853]">
              Contact Us
            </h4>

            <ul className="space-y-4">

              <li className="flex items-start space-x-3">
                <MapPin
                  size={18}
                  className="text-[#D4A853] mt-0.5 shrink-0"
                />

                <span className="text-[#FFFEF9]/60 text-sm">
                  Uttar Pradesh <br />
                  India
                </span>
              </li>

              <li className="flex items-center space-x-3">
                <Phone
                  size={18}
                  className="text-[#D4A853] shrink-0"
                />

                <a
                  href="tel:+918433177160"
                  className="text-[#FFFEF9]/60 hover:text-[#D4A853] transition-colors text-sm"
                >
                  +91 8433177160
                </a>
              </li>

              <li className="flex items-center space-x-3">
                <Mail
                  size={18}
                  className="text-[#D4A853] shrink-0"
                />

                <a
                  href="mailto:craftweaveexports@gmail.com"
                  className="text-[#FFFEF9]/60 hover:text-[#D4A853] transition-colors text-sm"
                >
                  craftweaveexports@gmail.com
                </a>
              </li>

              <li className="flex items-center space-x-3">
                <Globe
                  size={18}
                  className="text-[#D4A853] shrink-0"
                />

                <span className="text-[#FFFEF9]/60 text-sm">
                  Worldwide Export Support
                </span>
              </li>

            </ul>
          </div>
        </div>

        {/* Contact CTA Section */}
        <div className="border-t border-[#FFFEF9]/10 pt-12 pb-8">

          <div className="max-w-2xl mx-auto text-center">

            <h4 className="font-heading text-xl font-semibold mb-2 text-[#D4A853]">
              Get In Touch
            </h4>

            <p className="text-[#FFFEF9]/50 text-sm mb-6">
              Contact us for bulk textile inquiries, customized manufacturing,
              sourcing support, and export-related discussions.
            </p>

            <form
              onSubmit={handleContactClick}
              className="flex justify-center"
            >
              <button
                type="submit"
                className="btn-premium bg-gradient-to-r from-[#D4A853] to-[#B8860B] text-white px-8 py-3 rounded-md font-semibold text-sm flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-[#D4A853]/20 transition-all"
              >
                <span>Contact Us</span>
                <Send size={16} />
              </button>
            </form>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#FFFEF9]/10 pt-8">

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-[#FFFEF9]/40 text-xs text-center md:text-left">
              © {currentYear} CRAFTWEAVE EXPORTS. All rights reserved.
              Made with{' '}
              <Heart
                size={12}
                className="inline text-[#D4A853]"
              />{' '}
              in India.
            </p>

            <div className="flex items-center space-x-6 text-xs text-[#FFFEF9]/40">

              <Link
                to="/privacy-policy"
                className="hover:text-[#D4A853] transition-colors"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms-conditions"
                className="hover:text-[#D4A853] transition-colors"
              >
                Terms & Conditions
              </Link>

            </div>
          </div>

          {/* Footer Tags */}
          <div className="mt-6 flex flex-wrap justify-center gap-4">

            {[
              'Custom Manufacturing',
              'Bulk Textile Orders',
              'Home Textile Supplier',
              'Made in India',
              'Global Buyer Support',
            ].map((badge) => (
              <span
                key={badge}
                className="px-3 py-1 rounded-full bg-[#FFFEF9]/5 border border-[#FFFEF9]/10 text-[#FFFEF9]/40 text-xs"
              >
                {badge}
              </span>
            ))}

          </div>
        </div>
      </div>
    </footer>
  );
}