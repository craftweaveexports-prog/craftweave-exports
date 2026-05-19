export interface Product {
  id: string;
  productCode: string;
  name: string;
  category: string;
  description: string;
  longDescription?: string;
  image: string;
  images?: string[];
  material: string;
  moq: string;
  sizes: string[];
  colors: string[];
  customization: boolean;
  leadTime: string;
  priceRange: string;
  certifications: string[];
  featured?: boolean;
  trending?: boolean;
  exportReady: boolean;
  
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  productCount: number;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  country: string;
  image: string;
  text: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface InquiryData {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  country: string;
  products: string[];
  quantity: string;
  message: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}