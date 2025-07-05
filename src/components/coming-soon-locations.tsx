"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Clock, Mail, X } from "lucide-react"
import { Button } from "@/components/ui/button"

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

interface ComingSoonLocationsProps {
  isOpen: boolean
  onClose: () => void
}

const ComingSoonLocations = ({ isOpen, onClose }: ComingSoonLocationsProps) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="bg-card border border-border rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-border">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold text-foreground">Our Locations</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {locations.map((location, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 p-0">
                <div className="h-40 overflow-hidden flex items-center justify-center relative">
                  <img
                    src={location.image}
                    alt={location.name}
                    className="w-full h-full object-cover shadow-md"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <div className="rounded-full px-6 py-2" style={{backgroundColor: '#D4B44A'}}>
                      <h3 className="text-xl font-bold font-oswald text-black text-center">
                        {location.name}
                      </h3>
                    </div>
                  </div>
                </div>
                <CardContent className="space-y-3 pl-12 p-6">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-foreground font-medium text-sm">{location.address}</p>
                      <p className="text-muted-foreground text-sm">{location.city}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                    <a href={`tel:${location.phone}`} className="text-foreground hover:text-primary transition-colors text-sm">
                      {location.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                    <a href={`mailto:${location.email}`} className="text-foreground hover:text-primary transition-colors text-sm">
                      {location.email}
                    </a>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground text-sm">{location.hours}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComingSoonLocations 