"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BeerIcon, Glasses, WineIcon, X, RotateCcw } from "lucide-react"
import { Users, Calendar, Star, Utensils } from "lucide-react"

const eventTypes = [
  {
    name: "Corporate Events",
    description: "Perfect for business meetings, presentations & team bonding",
    icon: Users,
    features: ["AV Equipment", "Private Dining Room",  "Professional Service", "Custom Menu Options",]
  },
  {
    name: "Weddings & Celebrations",
    description: "Create unforgettable memories with our elegant event spaces",
    icon: Star,
    features: ["Wedding Coordination", "Photography Setup", "Floral Arrangements",  "Catering: Lamhaa Style",]
  },
  {
    name: "Intimate Gatherings",
    description: "Perfect for birthdays, anniversaries, and special occasions",
    icon: Calendar,
    features: ["Private Room", "Personalized Service", "Flexible Timing", "Special Menus"]
  },
  {
    name: "BYOB & Chill",
    description: "Sip, vibe, and groove — the perfect night out with your crew.",
    icon: BeerIcon,
    features: ["Relaxed Lounge Vibe", "Groovy Tunes", "Great for Catch-Ups", "Tasty Bar Bites"]
  }
]

const PrivateEventsSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isFlipped, setIsFlipped] = useState<{ [key: number]: boolean }>({})

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
      <section id="events" className="py-8" style={{backgroundColor: '#4F4D46'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 mt-16">
            <div className="flex items-center justify-center mb-4">
              <div className="flex-1 h-px mx-2 md:mx-4" style={{backgroundColor: '#D4B44A'}}></div>
              <h2 className="text-4xl md:text-5xl font mb-4 px-2 md:px-4" style={{color: '#D4B44A'}}>
                PRIVATE EVENTS
              </h2>
              <div className="flex-1 h-px mx-2 md:mx-4" style={{backgroundColor: '#D4B44A'}}></div>
            </div>
            <p className="text-xl max-w-3xl mx-auto" style={{color: '#D4B44A'}}>
            Turn moments into memories, host your event in style
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4 mb-16">
            {eventTypes.map((eventType, index) => {
              const IconComponent = eventType.icon
              const isWeddings = eventType.name === "Weddings & Celebrations"
              const isCorporate = eventType.name === "Corporate Events"
              const isIntimate = eventType.name === "Intimate Gatherings"
              const isBYOB = eventType.name === "BYOB & Chill"
              if (isWeddings || isCorporate) {
                // Use different images for each card
                const frontImage = isWeddings ? "/haldi.jpg" : "/Corporate.webp"
                const backImage = isWeddings ? "/haldi.jpg" : "/Corporate.webp"
                const cardTitle = isWeddings ? "Weddings & Celebrations" : "Corporate Events"
                return (
                  <div key={index} className="perspective max-w-xs w-full h-80 mx-auto md:max-w-full">
                    <div className={`relative w-full h-80 transition-transform duration-500 transform ${isFlipped[index] ? 'rotate-y-180' : ''}`} style={{ transformStyle: 'preserve-3d' }}>
                      {/* Front Side */}
                      <div className="absolute w-full h-full backface-hidden bg-transparent border-border rounded-xl flex flex-col items-center justify-center shadow-lg">
                        <img
                          src={frontImage}
                          alt={cardTitle}
                          className="absolute inset-0 w-full h-full object-cover rounded-xl"
                          style={{height: '100%', width: '100%'}} 
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="rounded-full px-4 py-2 mx-2" style={{backgroundColor: '#B8943A'}}>
                            <h3 className="text-lg md:text-2xl font-oswald text-black text-center">
                              {cardTitle}
                            </h3>
                          </div>
                        </div>
                        <button
                          className="absolute bottom-8 right-8 bg-transparent p-0 shadow-none border-none"
                          onClick={() => setIsFlipped((prev) => ({ ...prev, [index]: true }))}
                          aria-label="Flip card"
                        >
                          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#B8943A] shadow-md hover:bg-black transition-colors">
                            <RotateCcw className="w-7 h-7 text-black hover:text-[#B8943A] transition-colors" />
                          </span>
                        </button>
                      </div>
                      {/* Back Side */}
                      <div className="absolute w-full h-full backface-hidden border-border rounded-xl flex flex-col items-start justify-start shadow-lg rotate-y-180 p-4 md:p-8 relative overflow-hidden">
                        <img
                          src={backImage}
                          alt={`${cardTitle} Background`}
                          className="absolute inset-0 w-full h-full object-cover rounded-xl"
                        />
                        {/* Overlay for text visibility: weddings (beige), corporate (white/transparent) */}
                        {isCorporate ? (
                          <div className="absolute inset-0 bg-white/80 rounded-xl"></div>
                        ) : (
                          <div className="absolute inset-0 bg-[#FFFDF5]/80 rounded-xl"></div>
                        )}
                        <div className="w-full relative z-10">
                          <p className="text-base md:text-lg font-bold mb-4 md:mb-6" style={{color: '#B8943A'}}>
                            {eventType.description}
                          </p>
                          <ul className="space-y-1 md:space-y-2 pl-4 list-disc">
                            {eventType.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="text-sm md:text-base" style={{color: '#B8943A'}}>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <button
                          className="absolute bottom-8 right-8 bg-transparent p-0 shadow-none border-none"
                          onClick={() => setIsFlipped((prev) => ({ ...prev, [index]: false }))}
                          aria-label="Flip card"
                        >
                          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#B8943A] shadow-md hover:bg-black transition-colors">
                            <RotateCcw className="w-7 h-7 text-black hover:text-[#B8943A] transition-colors" />
                          </span>
                        </button>
                      </div>
                    </div>
                    <style jsx>{`
                      .perspective { perspective: 1200px; }
                      .backface-hidden { backface-visibility: hidden; }
                      .rotate-y-180 { transform: rotateY(180deg); }
                    `}</style>
                  </div>
                )
              } else if (isIntimate) {
                const frontImage = "/Intimate.webp"
                const backImage = "/Intimate.webp"
                const cardTitle = "Intimate Gatherings"
                return (
                  <div key={index} className="perspective max-w-xs w-full h-80 mx-auto md:max-w-full">
                    <div className={`relative w-full h-80 transition-transform duration-500 transform ${isFlipped[index] ? 'rotate-y-180' : ''}`} style={{ transformStyle: 'preserve-3d' }}>
                      {/* Front Side */}
                      <div className="absolute w-full h-full backface-hidden bg-transparent border-border rounded-xl flex flex-col items-center justify-center shadow-lg">
                        <img
                          src={frontImage}
                          alt={cardTitle}
                          className="absolute inset-0 w-full h-full object-cover rounded-xl"
                          style={{height: '100%', width: '100%'}} 
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="rounded-full px-4 py-2 mx-2" style={{backgroundColor: '#B8943A'}}>
                            <h3 className="text-lg md:text-2xl font-oswald text-black text-center">
                              {cardTitle}
                            </h3>
                          </div>
                        </div>
                        <button
                          className="absolute bottom-8 right-8 bg-transparent p-0 shadow-none border-none"
                          onClick={() => setIsFlipped((prev) => ({ ...prev, [index]: true }))}
                          aria-label="Flip card"
                        >
                          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#B8943A] shadow-md hover:bg-black transition-colors">
                            <RotateCcw className="w-7 h-7 text-black hover:text-[#B8943A] transition-colors" />
                          </span>
                        </button>
                      </div>
                      {/* Back Side */}
                      <div className="absolute w-full h-full backface-hidden border-border rounded-xl flex flex-col items-start justify-start shadow-lg rotate-y-180 p-4 md:p-8 relative overflow-hidden">
                        <img
                          src={backImage}
                          alt={`${cardTitle} Background`}
                          className="absolute inset-0 w-full h-full object-cover rounded-xl"
                        />
                        {/* Overlay for text visibility: white/transparent for intimate */}
                        <div className="absolute inset-0 bg-white/80 rounded-xl"></div>
                        <div className="w-full relative z-10">
                          <p className="text-base md:text-lg font-bold mb-4 md:mb-6" style={{color: '#B8943A'}}>
                            {eventType.description}
                          </p>
                          <ul className="space-y-1 md:space-y-2 pl-4 list-disc">
                            {eventType.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="text-sm md:text-base" style={{color: '#B8943A'}}>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <button
                          className="absolute bottom-8 right-8 bg-transparent p-0 shadow-none border-none"
                          onClick={() => setIsFlipped((prev) => ({ ...prev, [index]: false }))}
                          aria-label="Flip card"
                        >
                          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#B8943A] shadow-md hover:bg-black transition-colors">
                            <RotateCcw className="w-7 h-7 text-black hover:text-[#B8943A] transition-colors" />
                          </span>
                        </button>
                      </div>
                    </div>
                    <style jsx>{`
                      .perspective { perspective: 1200px; }
                      .backface-hidden { backface-visibility: hidden; }
                      .rotate-y-180 { transform: rotateY(180deg); }
                    `}</style>
                  </div>
                )
              } else if (isBYOB) {
                const frontImage = "/Cheers.jpg"
                const backImage = "/Cheers.jpg"
                const cardTitle = "BYOB & Chill"
                return (
                  <div key={index} className="perspective max-w-xs w-full h-80 mx-auto md:max-w-full">
                    <div className={`relative w-full h-80 transition-transform duration-500 transform ${isFlipped[index] ? 'rotate-y-180' : ''}`} style={{ transformStyle: 'preserve-3d' }}>
                      {/* Front Side */}
                      <div className="absolute w-full h-full backface-hidden bg-transparent border-border rounded-xl flex flex-col items-center justify-center shadow-lg">
                        <img
                          src={frontImage}
                          alt={cardTitle}
                          className="absolute inset-0 w-full h-full object-cover rounded-xl"
                          style={{height: '100%', width: '100%'}} 
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="rounded-full px-4 py-2 mx-2" style={{backgroundColor: '#B8943A'}}>
                            <h3 className="text-lg md:text-2xl font-oswald text-black text-center">
                              {cardTitle}
                            </h3>
                          </div>
                        </div>
                        <button
                          className="absolute bottom-8 right-8 bg-transparent p-0 shadow-none border-none"
                          onClick={() => setIsFlipped((prev) => ({ ...prev, [index]: true }))}
                          aria-label="Flip card"
                        >
                          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#B8943A] shadow-md hover:bg-black transition-colors">
                            <RotateCcw className="w-7 h-7 text-black hover:text-[#B8943A] transition-colors" />
                          </span>
                        </button>
                      </div>
                      {/* Back Side */}
                      <div className="absolute w-full h-full backface-hidden border-border rounded-xl flex flex-col items-start justify-start shadow-lg rotate-y-180 p-4 md:p-8 relative overflow-hidden">
                        <img
                          src={backImage}
                          alt={`${cardTitle} Background`}
                          className="absolute inset-0 w-full h-full object-cover rounded-xl"
                        />
                        {/* Overlay for text visibility: white/transparent for BYOB */}
                        <div className="absolute inset-0 bg-white/80 rounded-xl"></div>
                        <div className="w-full relative z-10">
                          <p className="text-base md:text-lg font-bold mb-4 md:mb-6" style={{color: '#B8943A'}}>
                            {eventType.description}
                          </p>
                          <ul className="space-y-1 md:space-y-2 pl-4 list-disc">
                            {eventType.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="text-sm md:text-base" style={{color: '#B8943A'}}>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <button
                          className="absolute bottom-8 right-8 bg-transparent p-0 shadow-none border-none"
                          onClick={() => setIsFlipped((prev) => ({ ...prev, [index]: false }))}
                          aria-label="Flip card"
                        >
                          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#B8943A] shadow-md hover:bg-black transition-colors">
                            <RotateCcw className="w-7 h-7 text-black hover:text-[#B8943A] transition-colors" />
                          </span>
                        </button>
                      </div>
                    </div>
                    <style jsx>{`
                      .perspective { perspective: 1200px; }
                      .backface-hidden { backface-visibility: hidden; }
                      .rotate-y-180 { transform: rotateY(180deg); }
                    `}</style>
                  </div>
                )
              }
              return (
                <Card
                  key={index}
                  className={`border-border hover:border-primary/40 transition-colors max-w-xs w-full h-80 mx-auto md:max-w-full overflow-hidden${isWeddings ? '' : ''}`}
                  style={isWeddings ? {} : {backgroundColor: '#FFFDF5'}}
                >
                  <CardHeader className={`relative z-10${isWeddings ? ' pt-24' : ''}`}>
                    <div className="flex items-center space-x-2 md:space-x-3 mb-3 md:mb-4">
                      <div className="p-1 md:p-2 rounded-lg" style={{backgroundColor: 'transparent'}}>
                        <IconComponent className="w-5 h-5 md:w-6 md:h-6" style={{color: '#B8943A'}} />
                      </div>
                      <CardTitle className="text-lg md:text-2xl font-bold" style={{color: '#B8943A'}}>
                        {eventType.name}
                      </CardTitle>
                    </div>
                    <p className="text-base md:text-lg" style={{color: '#B8943A'}}>
                      {eventType.description}
                    </p>
                    {/* <p className="text-primary font-medium">
                      Capacity: {eventType.capacity}
                    </p> */}
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <ul className="space-y-1 md:space-y-2">
                      {eventType.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2" style={{color: '#B8943A'}}>
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full flex-shrink-0" style={{backgroundColor: '#4F4D46'}}></div>
                          <span className="text-sm md:text-base">{feature}</span>
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