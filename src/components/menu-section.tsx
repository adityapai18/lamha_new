"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"

const menuItems = [
  {
    category: "Appetizers",
    items: [
      { name: "Truffle Arancini", description: "Crispy risotto balls with truffle aioli", price: "$16" },
      { name: "Burrata Caprese", description: "Fresh burrata with heirloom tomatoes and basil", price: "$18" },
      { name: "Seared Scallops", description: "With cauliflower purée and pancetta", price: "$22" }
    ]
  },
  {
    category: "Main Courses",
    items: [
      { name: "Wagyu Beef Tenderloin", description: "With roasted vegetables and red wine reduction", price: "$48" },
      { name: "Lobster Linguine", description: "Fresh Maine lobster with house-made pasta", price: "$42" },
      { name: "Duck Confit", description: "With cherry compote and potato gratin", price: "$38" },
      { name: "Vegetarian Risotto", description: "Wild mushrooms and aged parmesan", price: "$32" }
    ]
  },
  {
    category: "Desserts",
    items: [
      { name: "Chocolate Soufflé", description: "With vanilla bean ice cream", price: "$14" },
      { name: "Crème Brûlée", description: "Classic vanilla with fresh berries", price: "$12" },
      { name: "Tiramisu", description: "House-made with espresso and mascarpone", price: "$13" }
    ]
  }
]

const fullMenuBenselam = [
  {
    category: "Appetizers",
    items: [
      { name: "Truffle Arancini", description: "Crispy risotto balls with truffle aioli", price: "$16" },
      { name: "Burrata Caprese", description: "Fresh burrata with heirloom tomatoes and basil", price: "$18" },
      { name: "Seared Scallops", description: "With cauliflower purée and pancetta", price: "$22" },
      { name: "Bruschetta", description: "Toasted bread with fresh tomatoes and basil", price: "$12" },
      { name: "Calamari", description: "Crispy fried squid with marinara sauce", price: "$20" }
    ]
  },
  {
    category: "Soups & Salads",
    items: [
      { name: "Lobster Bisque", description: "Creamy lobster soup with cognac", price: "$18" },
      { name: "Caesar Salad", description: "Romaine lettuce, parmesan, croutons", price: "$14" },
      { name: "Arugula Salad", description: "With goat cheese, walnuts, and balsamic", price: "$16" }
    ]
  },
  {
    category: "Main Courses",
    items: [
      { name: "Wagyu Beef Tenderloin", description: "With roasted vegetables and red wine reduction", price: "$48" },
      { name: "Lobster Linguine", description: "Fresh Maine lobster with house-made pasta", price: "$42" },
      { name: "Duck Confit", description: "With cherry compote and potato gratin", price: "$38" },
      { name: "Vegetarian Risotto", description: "Wild mushrooms and aged parmesan", price: "$32" },
      { name: "Grilled Salmon", description: "With asparagus and lemon butter sauce", price: "$36" },
      { name: "Chicken Marsala", description: "With mushrooms and marsala wine sauce", price: "$28" }
    ]
  },
  {
    category: "Desserts",
    items: [
      { name: "Chocolate Soufflé", description: "With vanilla bean ice cream", price: "$14" },
      { name: "Crème Brûlée", description: "Classic vanilla with fresh berries", price: "$12" },
      { name: "Tiramisu", description: "House-made with espresso and mascarpone", price: "$13" },
      { name: "Apple Tart", description: "With caramel sauce and vanilla ice cream", price: "$11" }
    ]
  }
]

const fullMenuHamilton = [
  {
    category: "Appetizers",
    items: [
      { name: "Truffle Arancini", description: "Crispy risotto balls with truffle aioli", price: "$17" },
      { name: "Burrata Caprese", description: "Fresh burrata with heirloom tomatoes and basil", price: "$19" },
      { name: "Seared Scallops", description: "With cauliflower purée and pancetta", price: "$24" },
      { name: "Bruschetta", description: "Toasted bread with fresh tomatoes and basil", price: "$13" },
      { name: "Calamari", description: "Crispy fried squid with marinara sauce", price: "$22" }
    ]
  },
  {
    category: "Soups & Salads",
    items: [
      { name: "Lobster Bisque", description: "Creamy lobster soup with cognac", price: "$20" },
      { name: "Caesar Salad", description: "Romaine lettuce, parmesan, croutons", price: "$15" },
      { name: "Arugula Salad", description: "With goat cheese, walnuts, and balsamic", price: "$17" }
    ]
  },
  {
    category: "Main Courses",
    items: [
      { name: "Wagyu Beef Tenderloin", description: "With roasted vegetables and red wine reduction", price: "$52" },
      { name: "Lobster Linguine", description: "Fresh Maine lobster with house-made pasta", price: "$45" },
      { name: "Duck Confit", description: "With cherry compote and potato gratin", price: "$40" },
      { name: "Vegetarian Risotto", description: "Wild mushrooms and aged parmesan", price: "$34" },
      { name: "Grilled Salmon", description: "With asparagus and lemon butter sauce", price: "$38" },
      { name: "Chicken Marsala", description: "With mushrooms and marsala wine sauce", price: "$30" }
    ]
  },
  {
    category: "Desserts",
    items: [
      { name: "Chocolate Soufflé", description: "With vanilla bean ice cream", price: "$15" },
      { name: "Crème Brûlée", description: "Classic vanilla with fresh berries", price: "$13" },
      { name: "Tiramisu", description: "House-made with espresso and mascarpone", price: "$14" },
      { name: "Apple Tart", description: "With caramel sauce and vanilla ice cream", price: "$12" }
    ]
  }
]

const MenuSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedLocation(null)
  }

  const getMenuForLocation = (location: string) => {
    return location === "Benselam" ? fullMenuBenselam : fullMenuHamilton
  }

  return (
    <>
      <section id="menu" className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <div className="flex-1 h-px bg-yellow-400 mx-2 md:mx-4"></div>
              <h2 className="text-4xl md:text-5xl font text-foreground mb-4 px-2 md:px-4">
                Our Menu
              </h2>
              <div className="flex-1 h-px bg-yellow-400 mx-2 md:mx-4"></div>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our carefully curated selection of dishes, crafted with the finest ingredients 
              and inspired by culinary traditions from around the world.
            </p>
          </div>

          {/* Horizontal Carousel for Menu Sections */}
          <div className="relative">
            <Carousel className="w-full">
              <CarouselContent>
                {menuItems.map((category, categoryIndex) => (
                  <CarouselItem key={categoryIndex} className="flex justify-center">
                    <div className="w-full max-w-2xl">
                      <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-8 text-center">
                        {category.category}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {category.items.map((item, itemIndex) => (
                          <Card key={itemIndex} className="hover:shadow-lg transition-shadow duration-300 bg-card border-border">
                            <CardHeader className="pb-2">
                              <div className="flex justify-between items-start">
                                <CardTitle className="text-lg font-semibold text-foreground">
                                  {item.name}
                                </CardTitle>
                                <span className="text-lg font-semibold text-primary">
                                  {item.price}
                                </span>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <p className="text-muted-foreground text-sm leading-relaxed">
                                {item.description}
                              </p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-6 top-1/2 -translate-y-1/2" />
              <CarouselNext className="-right-6 top-1/2 -translate-y-1/2" />
            </Carousel>
          </div>

          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-4">
              Menu items and prices are subject to change based on seasonal availability
            </p>
            <Button 
              onClick={openModal}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-all font-bold"
            >
              View Full Menu
            </Button>
          </div>
        </div>
      </section>

      {/* Full Menu Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-background border-b border-border p-6 flex justify-between items-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Full Menu
              </h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={closeModal}
                className="hover:bg-muted"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            {/* Location Selection */}
            {!selectedLocation && (
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
                  Select a Location
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button
                    onClick={() => setSelectedLocation("Benselam")}
                    className="h-20 text-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Benselam, Pennsylvania
                  </Button>
                  <Button
                    onClick={() => setSelectedLocation("Hamilton")}
                    className="h-20 text-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Hamilton, New Jersey
                  </Button>
                </div>
              </div>
            )}

            {/* Full Menu Content */}
            {selectedLocation && (
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold text-foreground">
                    {selectedLocation} Menu
                  </h3>
                  <Button
                    variant="outline"
                    onClick={() => setSelectedLocation(null)}
                    className="text-sm"
                  >
                    Change Location
                  </Button>
                </div>
                {/* Horizontal Carousel for Full Menu Modal */}
                <div className="relative">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {getMenuForLocation(selectedLocation).map((category, categoryIndex) => (
                        <CarouselItem key={categoryIndex} className="flex justify-center">
                          <div className="w-full max-w-2xl">
                            <h4 className="text-xl md:text-2xl font-semibold text-foreground mb-4 border-b border-border pb-2 text-center">
                              {category.category}
                            </h4>
                            <div className="space-y-4">
                              {category.items.map((item, itemIndex) => (
                                <div key={itemIndex} className="flex justify-between items-start py-2">
                                  <div className="flex-1">
                                    <h5 className="font-semibold text-foreground">{item.name}</h5>
                                    <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                                  </div>
                                  <span className="font-semibold text-primary ml-4">
                                    {item.price}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="-left-6 top-1/2 -translate-y-1/2" />
                    <CarouselNext className="-right-6 top-1/2 -translate-y-1/2" />
                  </Carousel>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default MenuSection 