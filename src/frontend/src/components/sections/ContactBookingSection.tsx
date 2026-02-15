import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { fleetData } from '../../data/fleet';
import { useCreateBooking } from '../../hooks/useCreateBooking';

interface ContactBookingSectionProps {
  selectedCar: string;
}

export default function ContactBookingSection({ selectedCar }: ContactBookingSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    carSelection: '',
    rentalDuration: '',
    pickupLocation: '',
    message: '',
  });

  const { mutate: createBooking, isPending, isSuccess, isError } = useCreateBooking();

  // Update car selection when selectedCar prop changes
  useEffect(() => {
    if (selectedCar) {
      setFormData((prev) => ({ ...prev, carSelection: selectedCar }));
    }
  }, [selectedCar]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phoneNumber || !formData.carSelection) {
      alert('Please fill in all required fields (Name, Phone Number, Car Selection)');
      return;
    }

    createBooking(formData);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phoneNumber: '',
      carSelection: '',
      rentalDuration: '',
      pickupLocation: '',
      message: '',
    });
  };

  return (
    <section id="contact-booking" className="py-20 sm:py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Contact & Booking
          </h2>
          <p className="text-lg text-muted-foreground">
            Get in touch with us or book your vehicle directly
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Get In Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                    <a
                      href="tel:+923005125009"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      +92 300 5125009
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">WhatsApp</h4>
                    <a
                      href="https://wa.me/923005125009"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      +92 300 5125009
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <a
                      href="mailto:eaglenesttourism@gmail.com"
                      className="text-muted-foreground hover:text-accent transition-colors break-all"
                    >
                      eaglenesttourism@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Location</h4>
                    <p className="text-muted-foreground">
                      I-8 Markaz, 2000 Plaza, Islamabad, Pakistan
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Google Map */}
            <Card className="border-2 overflow-hidden">
              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.4!2d73.0479!3d33.6844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf1c8c8c8c8d%3A0x1234567890abcdef!2sI-8%20Markaz%2C%20Islamabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Islamabad Rent A Car Location - I-8 Markaz, 2000 Plaza"
                />
              </CardContent>
            </Card>
          </div>

          {/* Booking Form */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Book Your Vehicle</CardTitle>
            </CardHeader>
            <CardContent>
              {isSuccess ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                    <svg
                      className="w-8 h-8 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Booking Submitted!</h3>
                  <p className="text-muted-foreground">
                    Thank you for your booking request. We'll contact you shortly to confirm your reservation.
                  </p>
                  <Button onClick={handleReset} variant="outline" className="mt-4">
                    Book Another Vehicle
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name">
                      Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-2">
                    <Label htmlFor="phone">
                      Phone Number <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+92 300 1234567"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      required
                    />
                  </div>

                  {/* Car Selection */}
                  <div className="space-y-2">
                    <Label htmlFor="car">
                      Select Car <span className="text-destructive">*</span>
                    </Label>
                    <Select
                      value={formData.carSelection}
                      onValueChange={(value) => setFormData({ ...formData, carSelection: value })}
                      required
                    >
                      <SelectTrigger id="car">
                        <SelectValue placeholder="Choose a vehicle" />
                      </SelectTrigger>
                      <SelectContent>
                        {fleetData.map((vehicle) => (
                          <SelectItem key={vehicle.id} value={vehicle.name}>
                            {vehicle.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Rental Duration */}
                  <div className="space-y-2">
                    <Label htmlFor="duration">Rental Duration</Label>
                    <Select
                      value={formData.rentalDuration}
                      onValueChange={(value) => setFormData({ ...formData, rentalDuration: value })}
                    >
                      <SelectTrigger id="duration">
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Pickup Location */}
                  <div className="space-y-2">
                    <Label htmlFor="pickup">Pickup Location</Label>
                    <Input
                      id="pickup"
                      type="text"
                      placeholder="Enter pickup address"
                      value={formData.pickupLocation}
                      onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Any special requirements or questions?"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  {/* Error Message */}
                  {isError && (
                    <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                      <p className="text-sm text-destructive">
                        There was an error submitting your booking. Please try again or contact us directly.
                      </p>
                    </div>
                  )}

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    disabled={isPending}
                  >
                    {isPending ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      'Confirm Booking'
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
