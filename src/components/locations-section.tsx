import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Clock, Mail } from "lucide-react"

const locations = [
  {
    name: "Benselam",
    address: "123 Main Street",
    city: "Benselam, Pennsylvania",
    phone: "(555) 123-4567",
    email: "benselam@lamha.com",
    hours: "Mon-Sun: 5:00 PM - 11:00 PM",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Hamilton",
    address: "456 Park Avenue",
    city: "Hamilton, New Jersey",
    phone: "(555) 987-6543",
    email: "hamilton@lamha.com",
    hours: "Mon-Sun: 5:00 PM - 11:00 PM",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
]

const LocationsSection = () => {
  return (
    <section id="locations" className="py-16 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Locations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Visit us at either of our two locations. 
            Each venue offers the same exceptional dining experience in a unique setting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {locations.map((location, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-card border-border">
              <div className="h-48 overflow-hidden">
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  {location.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-foreground font-medium">{location.address}</p>
                    <p className="text-muted-foreground">{location.city}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <a href={`tel:${location.phone}`} className="text-foreground hover:text-primary transition-colors">
                    {location.phone}
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <a href={`mailto:${location.email}`} className="text-foreground hover:text-primary transition-colors">
                    {location.email}
                  </a>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">{location.hours}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LocationsSection 