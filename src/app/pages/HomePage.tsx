import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { AccommodationSection } from '../components/AccommodationSection';
import { ActivitiesSection } from '../components/ActivitiesSection';
import { GallerySection } from '../components/GallerySection';
import { PricingSection } from '../components/PricingSection';
import { LocationSection } from '../components/LocationSection';
import { ReviewsSection } from '../components/ReviewsSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { FloatingBookingButton } from '../components/FloatingBookingButton';

export function HomePage() {
  return (
    <div className="min-h-screen bg-white font-['Poppins']">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <AccommodationSection />
      <ActivitiesSection />
      <GallerySection />
      <PricingSection />
      <LocationSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
      <FloatingBookingButton />
    </div>
  );
}
