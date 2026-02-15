import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const getAppIdentifier = () => {
    if (typeof window !== 'undefined') {
      return encodeURIComponent(window.location.hostname);
    }
    return 'unknown-app';
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-primary-foreground">Islamabad</span>{' '}
              <span className="text-accent">Rent A Car</span>
            </h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Your trusted partner for premium car rental services in Islamabad. 
              Luxury, executive, and economy vehicles available for daily, weekly, and monthly rentals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#hero" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#fleet" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Our Fleet
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#contact-booking" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Contact & Booking
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Phone: +92 300 5125009</li>
              <li>WhatsApp: +92 300 5125009</li>
              <li>Email: eaglenesttourism@gmail.com</li>
              <li>Location: I-8 Markaz, 2000 Plaza, Islamabad</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-sm text-primary-foreground/80">
            © {currentYear} Islamabad Rent A Car and Tours. All rights reserved.
          </p>
          <p className="text-sm text-primary-foreground/60 mt-2 flex items-center justify-center gap-1">
            Built with <Heart className="w-4 h-4 text-accent fill-accent" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${getAppIdentifier()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
