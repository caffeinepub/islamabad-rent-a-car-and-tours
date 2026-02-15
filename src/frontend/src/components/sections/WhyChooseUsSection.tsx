import { Card, CardContent } from '../ui/card';
import { Car, Shield, Users, Clock, DollarSign, Truck } from 'lucide-react';

const benefits = [
  {
    icon: Car,
    title: 'Wide Range from Luxury to Group Transport',
    description: 'From luxury SUVs to group transport vehicles, we have the perfect vehicle for every need',
  },
  {
    icon: Shield,
    title: 'Well-Maintained & Clean Vehicles',
    description: 'All our vehicles are regularly serviced and maintained to the highest standards',
  },
  {
    icon: Users,
    title: 'Professional Drivers Available',
    description: 'Experienced and courteous drivers available upon request',
  },
  {
    icon: Clock,
    title: '24/7 Customer Support',
    description: 'Round-the-clock assistance for all your rental needs',
  },
  {
    icon: DollarSign,
    title: 'Transparent & Competitive Pricing',
    description: 'No hidden charges, competitive rates with clear pricing',
  },
  {
    icon: Truck,
    title: 'On-Time Pickup & Drop Service',
    description: 'Punctual service with flexible pickup and drop-off options',
  },
];

export default function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="py-20 sm:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience the difference with Islamabad's most trusted car rental service
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={index}
                className="border-2 hover:border-accent hover:shadow-luxury transition-all duration-300 group"
              >
                <CardContent className="p-8 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
