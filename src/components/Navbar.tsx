import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import logo from '../assets/logos/logo.png';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  {
    label: 'Products',
    href: '/products',
    children: [
      { label: 'All Products', href: '/products' },
      { label: 'Categories', href: '/categories' },
      { label: 'Custom Manufacturing', href: '/custom-manufacturing' },
    ],
  },
  { label: 'Export Services', href: '/export-services' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(null);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? 'glass-dark shadow-2xl shadow-black/20 py-2'
          : 'bg-transparent py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src={logo}
              alt="CraftWeave Logo"
              className="w-14 h-14 object-contain"
            />
            <div className="hidden sm:block">
              <h1 className={`font-display text-xl font-semibold tracking-wider transition-colors ${scrolled ? 'text-[#FFFEF9]' : 'text-[#FFFEF9]'}`}>
                CraftWeave Exports
              </h1>
              <p className={`text-xs tracking-[0.25em] uppercase transition-colors ${scrolled ? 'text-[#D4A853]/80' : 'text-[#D4A853]'}`}>
                modern & cultural
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setDropdownOpen(item.label)}
                onMouseLeave={() => setDropdownOpen(null)}
              >
                <Link
                  to={item.href}
                  className={`flex items-center space-x-1 text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:text-[#D4A853] ${location.pathname === item.href ? 'text-[#D4A853]' : scrolled ? 'text-[#FFFEF9]/90' : 'text-[#FFFEF9]'
                    }`}
                >
                  <span>{item.label}</span>
                  {item.children && <ChevronDown size={14} className={`transition-transform ${dropdownOpen === item.label ? 'rotate-180' : ''}`} />}
                </Link>

                {/* Dropdown */}
                {item.children && dropdownOpen === item.label && (
                  <div className="absolute top-full left-0 mt-2 w-56 glass rounded-lg shadow-2xl overflow-hidden animate-fade-in-up">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="block px-5 py-3 text-sm text-[#1C1917] hover:bg-[#D4A853]/10 hover:text-[#7C2D12] transition-colors border-b border-[#D4A853]/10 last:border-0"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+91 8433177160"
              className={`flex items-center space-x-2 text-sm transition-colors ${scrolled ? 'text-[#D4A853]' : 'text-[#D4A853]'}`}
            >
              <Phone size={16} />
              <span>+91 8433177160</span>
            </a>
            <Link
              to="/bulk-inquiry"
              className="btn-premium bg-gradient-to-r from-[#D4A853] to-[#B8860B] text-white px-6 py-2.5 rounded-md text-sm font-semibold tracking-wide hover:shadow-lg hover:shadow-[#D4A853]/30 transition-all"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors ${scrolled ? 'text-[#FFFEF9]' : 'text-[#FFFEF9]'}`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 glass rounded-xl p-6 animate-fade-in-up">
            <div className="space-y-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.href}
                    className={`block text-base font-medium tracking-wide uppercase transition-colors ${location.pathname === item.href ? 'text-[#D4A853]' : 'text-[#1C1917]'
                      }`}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block text-sm text-[#78716C] hover:text-[#7C2D12] transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-[#D4A853]/20">
                <Link
                  to="/bulk-inquiry"
                  className="block w-full btn-premium bg-gradient-to-r from-[#D4A853] to-[#B8860B] text-white text-center px-6 py-3 rounded-md font-semibold tracking-wide"
                >
                  Request Bulk Quote
                </Link>
                <a
                  href="tel:+91 8433177160"
                  className="block text-center mt-3 text-[#7C2D12] font-medium"
                >
                  +91 8433177160
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}