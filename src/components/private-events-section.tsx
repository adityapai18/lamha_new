"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { Users, Calendar, Star, Utensils } from "lucide-react"

const eventTypes = [
  {
    name: "Corporate Events",
    description: "Perfect for business meetings, presentations, and team building events",
    capacity: "20-50 guests",
    icon: Users,
    features: ["AV Equipment", "Private Dining Room", "Custom Menu Options", "Professional Service"]
  },
  {
    name: "Weddings & Celebrations",
    description: "Create unforgettable memories with our elegant event spaces",
    capacity: "50-150 guests",
    icon: Star,
    features: ["Wedding Coordination", "Custom Catering", "Photography Setup", "Floral Arrangements"]
  },
  {
    name: "Intimate Gatherings",
    description: "Perfect for birthdays, anniversaries, and special occasions",
    capacity: "10-30 guests",
    icon: Calendar,
    features: ["Private Room", "Personalized Service", "Special Menus", "Flexible Timing"]
  },
  {
    name: "Wine Dinners",
    description: "Exclusive wine pairing experiences with our sommelier",
    capacity: "15-40 guests",
    icon: Utensils,
    features: ["Wine Expert", "Curated Menu", "Educational Experience", "Premium Wines"]
  }
]

const PrivateEventsSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false)

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    } else {
      // Fallback to footer if no contact section exists
      const footer = document.querySelector('footer')
      if (footer) {
        footer.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const openQuoteForm = () => {
    setIsFormOpen(true)
  }

  const closeQuoteForm = () => {
    setIsFormOpen(false)
  }

  return (
    <>
      <section id="events" className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Private Events
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Host your next special occasion in our elegant private dining spaces. 
              From intimate gatherings to large celebrations, we create unforgettable experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {eventTypes.map((eventType, index) => {
              const IconComponent = eventType.icon
              return (
                <Card key={index} className="bg-card border-border hover:border-primary/40 transition-colors">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 bg-primary/20 rounded-lg">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-foreground">
                        {eventType.name}
                      </CardTitle>
                    </div>
                    <p className="text-muted-foreground text-lg">
                      {eventType.description}
                    </p>
                    <p className="text-primary font-medium">
                      Capacity: {eventType.capacity}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {eventType.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-foreground">
                Why Choose Lamhaa for Your Event?
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-foreground">Expert Event Planning</h4>
                    <p className="text-muted-foreground">
                      Our dedicated event team works closely with you to ensure every detail is perfect.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-foreground">Customized Menus</h4>
                    <p className="text-muted-foreground">
                      Work with our chefs to create a menu that perfectly suits your event and preferences.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-foreground">Flexible Spaces</h4>
                    <p className="text-muted-foreground">
                      Multiple venue options to accommodate groups of all sizes and event types.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="/location4.jpg"
                alt="Private dining room"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent rounded-lg"></div>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="bg-card rounded-lg p-8 max-w-4xl mx-auto border border-border">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Ready to Plan Your Event?
              </h3>
              <p className="text-muted-foreground mb-6">
                Contact our events team to discuss your requirements and start planning your perfect event.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={openQuoteForm}
                  className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-all font-bold"
                >
                  Request a Quote
                </Button>
                <Button 
                  onClick={scrollToContact}
                  className="border-2 border-yellow-500 text-yellow-500 bg-transparent px-8 py-3 rounded-lg hover:bg-yellow-500 hover:text-black transition-all font-bold"
                >
                  Schedule a Tour
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Request Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-background rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-background border-b border-border p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-foreground">
                Request a Quote
              </h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={closeQuoteForm}
                className="hover:bg-muted"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            {/* Form Content */}
            <div className="p-6">
              {/* Banquet Availability Note */}
              <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800 font-medium">
                  <strong>Note:</strong> Banquet services are available only at Lamhaa, Benselam location. 
                  The preferred location has been set to Benselam, Pennsylvania for your convenience.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Event Type *
                  </label>
                  <select
                    required
                    className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select Event Type</option>
                    <option value="corporate">Corporate Events</option>
                    <option value="wedding">Weddings & Celebrations</option>
                    <option value="intimate">Intimate Gatherings</option>
                    <option value="wine">Wine Dinners</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Preferred Location *
                    </label>
                    <select
                      required
                      defaultValue="benselam"
                      disabled
                      className="w-full px-3 py-2 border border-border rounded-md bg-muted text-muted-foreground focus:outline-none cursor-not-allowed"
                    >
                      <option value="benselam">Benselam, Pennsylvania</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Number of Guests *
                    </label>
                    <input
                      type="number"
                      min="1"
                      required
                      className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Event Date *
                    </label>
                    <input
                      type="date"
                      required
                      className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Budget Range
                    </label>
                    <select className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                      <option value="">Select Budget Range</option>
                      <option value="under-1000">Under $1,000</option>
                      <option value="1000-2500">$1,000 - $2,500</option>
                      <option value="2500-5000">$2,500 - $5,000</option>
                      <option value="5000-10000">$5,000 - $10,000</option>
                      <option value="over-10000">Over $10,000</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Additional Details
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us more about your event, special requirements, or any questions you have..."
                    className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    type="submit"
                    className="flex-1 bg-primary text-primary-foreground py-3 rounded-lg hover:bg-primary/90 transition-all font-bold"
                  >
                    Submit Quote Request
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={closeQuoteForm}
                    className="flex-1 border border-border py-3 rounded-lg hover:bg-muted transition-all"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default PrivateEventsSection 