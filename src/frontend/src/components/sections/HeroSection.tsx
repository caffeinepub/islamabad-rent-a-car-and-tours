import { Button } from '../ui/button';

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/assets/generated/hero-collage-watermark.dim_1920x1080.jpg)',
          }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Premium Car Rental in Islamabad
          </h1>

          {/* Sub-headline */}
          <p className="text-xl sm:text-2xl md:text-3xl text-accent font-medium">
            Luxury • Executive • Economy — Available Daily, Weekly & Monthly
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto">
            Experience the finest car rental service in Islamabad with our premium fleet of luxury SUVs, 
            executive sedans, and economy vehicles. Professional service, transparent pricing, and 24/7 support.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              onClick={() => scrollToSection('contact-booking')}
              className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 shadow-luxury-lg"
            >
              Book Your Car Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contact-booking')}
              className="w-full sm:w-auto border-2 border-accent text-white hover:bg-accent/20 font-semibold text-lg px-8 py-6"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-accent rounded-full" />
        </div>
      </div>
    </section>
  );
}
