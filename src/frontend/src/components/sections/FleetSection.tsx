import FleetCarCard from '../FleetCarCard';
import { fleetData, categories } from '../../data/fleet';

interface FleetSectionProps {
  onBookNow: (carName: string) => void;
}

export default function FleetSection({ onBookNow }: FleetSectionProps) {
  const luxuryVehicles = fleetData.filter((v) => v.category === 'luxury');
  const executiveVehicles = fleetData.filter((v) => v.category === 'executive');
  const economyVehicles = fleetData.filter((v) => v.category === 'economy');
  const groupVehicles = fleetData.filter((v) => v.category === 'group');

  return (
    <section id="fleet" className="py-20 sm:py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our Premium Fleet
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose from our extensive collection of luxury SUVs, executive sedans, and economy vehicles. 
            Whether you need a Prado rental Islamabad, a Civic rent in Islamabad, Coaster rental Islamabad, 
            or Grand Cabin rent Pakistan, we have the perfect vehicle for your needs.
          </p>
        </div>

        {/* Luxury SUVs */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-4xl">{categories.luxury.icon}</span>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                {categories.luxury.title}
              </h3>
              <p className="text-muted-foreground">{categories.luxury.description}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {luxuryVehicles.map((vehicle) => (
              <FleetCarCard key={vehicle.id} vehicle={vehicle} onBookNow={onBookNow} />
            ))}
          </div>
        </div>

        {/* Executive Sedans */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-4xl">{categories.executive.icon}</span>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                {categories.executive.title}
              </h3>
              <p className="text-muted-foreground">{categories.executive.description}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {executiveVehicles.map((vehicle) => (
              <FleetCarCard key={vehicle.id} vehicle={vehicle} onBookNow={onBookNow} />
            ))}
          </div>
        </div>

        {/* Economy & Utility */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-4xl">{categories.economy.icon}</span>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                {categories.economy.title}
              </h3>
              <p className="text-muted-foreground">{categories.economy.description}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {economyVehicles.map((vehicle) => (
              <FleetCarCard key={vehicle.id} vehicle={vehicle} onBookNow={onBookNow} />
            ))}
          </div>
        </div>

        {/* Group & Commercial Transport */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="text-4xl">{categories.group.icon}</span>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                {categories.group.title}
              </h3>
              <p className="text-muted-foreground">{categories.group.description}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {groupVehicles.map((vehicle) => (
              <FleetCarCard key={vehicle.id} vehicle={vehicle} onBookNow={onBookNow} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
