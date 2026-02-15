import { useState } from 'react';
import TopNav from './components/TopNav';
import HeroSection from './components/sections/HeroSection';
import FleetSection from './components/sections/FleetSection';
import WhyChooseUsSection from './components/sections/WhyChooseUsSection';
import ContactBookingSection from './components/sections/ContactBookingSection';
import Footer from './components/Footer';

function App() {
  const [selectedCar, setSelectedCar] = useState<string>('');

  const handleBookNow = (carName: string) => {
    setSelectedCar(carName);
    // Scroll to booking form
    const bookingSection = document.getElementById('contact-booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <TopNav />
      <main>
        <HeroSection />
        <FleetSection onBookNow={handleBookNow} />
        <WhyChooseUsSection />
        <ContactBookingSection selectedCar={selectedCar} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
