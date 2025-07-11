import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Clock, Mail } from "lucide-react"

const locations = [
  {
    name: "BENSALEM",
    address: "2643 Street Rd",
    city: "Bensalem, PA",
    phone: "(215) 638-0786",
    email: "benselam@lamha.com",
    hours: <p>
    11:00 AM-3:00 PM <br/> 5:00 PM-10:00 PM<br />
    TUESDAY CLOSED
  </p>,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "HAMILTON",
    address: "133 Youngs Rd",
    city: "Hamilton Township, NJ",
    phone: "(609) 981-7157",
    email: "hamilton@lamha.com",
    hours: <p>
    11:00 AM-3:00 PM <br/> 5:00 PM-10:00 PM<br />
    TUESDAY CLOSED
  </p>,
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
]

const LocationsSection = () => {
  return (
    <section id="locations" className="py-16 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="flex-1 h-px mx-2 md:mx-4" style={{backgroundColor: '#B8943A'}}></div>
            <h2 className="text-4xl md:text-5xl font px-2 md:px-4" style={{color: '#B8943A'}}>
              OUR LOCATIONS
            </h2>
            <div className="flex-1 h-px mx-2 md:mx-4" style={{backgroundColor: '#B8943A'}}></div>
          </div>
          <p className="text-xl max-w-3xl mx-auto" style={{color: '#B8943A'}}>
            {/* Visit us at either of our two locations.  */}
            Each venue offers the same exceptional dining experience in a unique setting
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {locations.map((location, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-border p-0 max-w-xs w-full mx-auto md:max-w-full" style={{backgroundColor: '#4F4D46'}}>
              <div className="h-48 overflow-hidden flex items-center justify-center relative">
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-full object-cover shadow-md"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <div className="rounded-full px-6 py-2" style={{backgroundColor: '#D4B44A'}}>
                    <h3 className="text-2xl font-oswald text-black text-center">
                      {location.name}
                    </h3>
                  </div>
                </div>
              </div>
              <CardContent className="space-y-4 pl-12 p-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-amber-50 font-medium">{location.address}</p>
                    <p className="text-amber-50/80">{location.city}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <a href={`tel:${location.phone}`} className="text-amber-50 hover:text-primary transition-colors">
                    {location.phone}
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <a href={`mailto:${location.email}`} className="text-amber-50 hover:text-primary transition-colors">
                    {location.email}
                  </a>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-amber-50/80">{location.hours}</p>
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