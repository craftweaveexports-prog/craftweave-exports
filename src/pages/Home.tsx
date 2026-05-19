import HeroSection from '../components/HeroSection';
import FeaturedCollections from '../components/FeaturedCollections';
import WhyChooseUs from '../components/WhyChooseUs';
import ManufacturingProcess from '../components/ManufacturingProcess';
import GlobalExportSection from '../components/GlobalExportSection';
import Testimonials from '../components/Testimonials';
import InstagramGallery from '../components/InstagramGallery';
import Certifications from '../components/Certifications';
import FAQ from '../components/FAQ';
import Newsletter from '../components/Newsletter';

export default function Home() {
  return (
    <main>
      <HeroSection />
      
      {/* Section Divider */}
      <div className="section-divider" />
      
      <FeaturedCollections />
      
      <div className="section-divider" />
      
      <WhyChooseUs />
      
      <Certifications />
      
      <ManufacturingProcess />
      
      <div className="section-divider" />
      
      <GlobalExportSection />
      
      <div className="section-divider" />
      
      <Testimonials />
      
      <InstagramGallery />
      
      <FAQ />
      
      <Newsletter />
    </main>
  );
}