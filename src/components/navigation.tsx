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
import { cn } from "@/lib/utils"
import MenuModal from "@/components/menu-modal"

const Navigation = () => {
  const [isMenuModalOpen, setIsMenuModalOpen] = React.useState(false)
  const [isSheetOpen, setIsSheetOpen] = React.useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const openMenuModal = () => {
    setIsMenuModalOpen(true)
  }

  const closeMenuModal = () => {
    setIsMenuModalOpen(false)
  }

  return (
    <>
      {/* Location Announcement Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-center text-sm font-medium">
        <span>Now serving at two locations: <span className="font-semibold">New Jersey & Pennsylvania</span></span>
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

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                      onClick={openMenuModal}
                    >
                      Menu
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                      onClick={() => scrollToSection('locations')}
                    >
                      Locations
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                      onClick={() => scrollToSection('events')}
                    >
                      Private Events
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                      onClick={() => scrollToSection('about')}
                    >
                      About Us
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
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
                      onClick={() => {
                        openMenuModal();
                        setIsSheetOpen(false);
                      }}
                    >
                      Menu
                    </Button>
                    <Button
                      variant="ghost"
                      className="justify-start text-lg"
                      onClick={() => {
                        scrollToSection('locations');
                        setIsSheetOpen(false);
                      }}
                    >
                      Locations
                    </Button>
                    <Button
                      variant="ghost"
                      className="justify-start text-lg"
                      onClick={() => {
                        scrollToSection('events');
                        setIsSheetOpen(false);
                      }}
                    >
                      Private Events
                    </Button>
                    <Button
                      variant="ghost"
                      className="justify-start text-lg"
                      onClick={() => {
                        scrollToSection('about');
                        setIsSheetOpen(false);
                      }}
                    >
                      About Us
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Menu Modal */}
      <MenuModal isOpen={isMenuModalOpen} onClose={closeMenuModal} />
    </>
  )
}

export default Navigation 