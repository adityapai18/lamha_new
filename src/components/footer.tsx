"use client"

import { ArrowUp, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import MenuModal from "@/components/menu-modal"
import { useState } from "react"

const Footer = () => {
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

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
      <footer className="bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Restaurant Info */}
            <div className="flex flex-col items-center md:items-start">
              <img 
                src="/Logo.jpg" 
                alt="Logo" 
                className="h-48 w-auto object-contain mb-4"
              />
            </div>

            {/* Quick Links */}
            <div className="flex flex-col items-center md:items-start">
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-muted-foreground hover:text-foreground"
                    onClick={openMenuModal}
                  >
                    Menu
                  </Button>
                </li>
                <li>
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-muted-foreground hover:text-foreground"
                    onClick={() => scrollToSection('locations')}
                  >
                    Locations
                  </Button>
                </li>
                <li>
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-muted-foreground hover:text-foreground"
                    onClick={() => scrollToSection('events')}
                  >
                    Private Events
                  </Button>
                </li>
                <li>
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-muted-foreground hover:text-foreground"
                    onClick={() => scrollToSection('about')}
                  >
                    About Us
                  </Button>
                </li>
                <li>
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-muted-foreground hover:text-foreground"
                    onClick={() => scrollToSection('team')}
                  >
                    Our Team
                  </Button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col items-center md:items-start">
              <h4 className="font-semibold text-foreground mb-4">Contact</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-foreground mb-2">Bensalem, Pennsylvania</h5>
                  <div className="space-y-1 text-muted-foreground text-sm">
                    <p>Phone: (609) 616-6001</p>
                    <p>Email: Lamhaa.nj@gmail.com</p>
                  </div>
                </div>
                <div>
                  <h5 className="font-medium text-foreground mb-2">Hamilton, New Jersey</h5>
                  <div className="space-y-1 text-muted-foreground text-sm">
                    <p>Phone: (609) 616-6000</p>
                    <p>Email: Lamhaa.nj@gmail.com</p>
                  </div>
                </div>
                {/* Social Media */}
                <div>
                  <h5 className="font-medium text-foreground mb-2">Follow Us</h5>
                  <a 
                    href="https://www.instagram.com/lamhaagroup" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    <Instagram className="w-4 h-4" />
                    {/* <span>@lamhaagroup</span> */}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 Lamhaa Restaurant. All rights reserved.
            </p>
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToTop}
              className="mt-4 sm:mt-0"
            >
              <ArrowUp className="h-4 w-4" />
              <span className="sr-only">Back to top</span>
            </Button>
          </div>
        </div>
      </footer>

      {/* Menu Modal */}
      <MenuModal isOpen={isMenuModalOpen} onClose={closeMenuModal} />
    </>
  )
}

export default Footer 