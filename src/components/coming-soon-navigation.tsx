"use client"

import * as React from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import ComingSoonLocations from "@/components/coming-soon-locations"

const ComingSoonNavigation = () => {
  const [isLocationsOpen, setIsLocationsOpen] = React.useState(false)

  const openLocations = () => {
    setIsLocationsOpen(true)
  }

  const closeLocations = () => {
    setIsLocationsOpen(false)
  }

  return (
    <>
      {/* Location Announcement Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-2 text-center text-xs sm:text-sm font-medium whitespace-nowrap overflow-hidden text-ellipsis">
        <span className="inline sm:hidden font-semibold">Now serving: NJ & PA</span>
        <span className="hidden sm:inline">Now serving at two locations: <span className="font-semibold">New Jersey & Pennsylvania</span></span>
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img 
                src="/Logo_2.jpg" 
                alt="Logo2" 
                className="h-16 w-auto object-contain"
              />
            </div>

            {/* Desktop Navigation - Only Locations */}
            <div className="hidden md:block">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                      onClick={openLocations}
                    >
                      Locations
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Mobile Navigation - Only Locations */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <div className="flex flex-col space-y-4 mt-8">
                    <Button
                      variant="ghost"
                      className="justify-start text-lg"
                      onClick={openLocations}
                    >
                      Locations
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Locations Modal */}
      <ComingSoonLocations isOpen={isLocationsOpen} onClose={closeLocations} />
    </>
  )
}

export default ComingSoonNavigation 