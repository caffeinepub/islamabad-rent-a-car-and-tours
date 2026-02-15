import { Card, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import type { Vehicle } from '../data/fleet';

interface FleetCarCardProps {
  vehicle: Vehicle;
  onBookNow: (carName: string) => void;
}

export default function FleetCarCard({ vehicle, onBookNow }: FleetCarCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-luxury transition-all duration-300 group">
      <div className="relative aspect-[3/2] overflow-hidden bg-muted">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4">
          <Badge className="bg-accent text-accent-foreground font-semibold shadow-lg">
            Available
          </Badge>
        </div>
      </div>
      <CardContent className="p-6 space-y-3">
        <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
          {vehicle.name}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {vehicle.description}
        </p>
        <div className="flex items-center text-sm text-muted-foreground pt-2">
          <span className="font-medium">{vehicle.availability}</span>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button
          onClick={() => onBookNow(vehicle.name)}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
        >
          Book Now
        </Button>
      </CardFooter>
    </Card>
  );
}
