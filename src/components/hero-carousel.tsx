"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

const images = [
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Elegant restaurant interior",
    subtitle: "Where every moment becomes a memory"
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Delicious gourmet dishes",
    subtitle: "Experience the finest flavors"
  },
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    alt: "Cozy dining atmosphere",
    subtitle: "Perfect for every occasion"
  }
]

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [showText, setShowText] = useState(true)
  const [showTextLeft, setShowTextLeft] = useState(true)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  React.useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setShowText((prev) => !prev)
      setShowTextLeft((prev) => !prev)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen overflow-hidden pt-10">
      {/* Logo at the very top below navbar */}
      <div className="absolute top-20 md:top-4 left-1/2 -translate-x-1/2 z-30">
  <img
    src="/Logo.jpg"
    alt="Lamhaa Logo"
    className="w-[20rem] h-[20rem] md:w-auto md:h-[32rem] object-contain animate-fade-in max-w-none"
    style={{ filter: "drop-shadow(0 2px 24px #000)" }}
  />
</div>


      {/* Two oval images side by side at the bottom of the carousel */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 z-20">
        <div className="relative w-64 h-32 flex flex-col items-center mt-8 mb-8 md:mt-0 md:mb-0">
          <div className="w-64 h-32 rounded-full object-cover border-4 shadow-md aspect-[2/1] animated-border"></div>
          <img
            src="/Parx.jpg"
            alt="Benselam"
            className="w-64 h-32 rounded-full object-cover border-4 border-transparent absolute top-0 left-0"
            style={{ zIndex: 1 }}
          />
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-black/80 text-white text-sm font-semibold rounded-full px-4 py-1 shadow-lg border-2 border-white z-10 whitespace-nowrap">
            Bensalem, PA
          </span>
        </div>
        <div className="relative w-64 h-32 flex flex-col items-center">
          <div className="w-64 h-32 rounded-full object-cover border-4 shadow-md aspect-[2/1] animated-border"></div>
          <img
            src="/sculpture.jpg"
            alt="Sculpture"
            className="w-64 h-32 rounded-full object-cover border-4 border-transparent absolute top-0 left-0"
            style={{ zIndex: 1 }}
          />
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-black/80 text-white text-sm font-semibold rounded-full px-4 py-1 shadow-lg border-2 border-[#FFD700] z-10 whitespace-nowrap">
            Hamilton, NJ
          </span>
        </div>
      </div>

      <style jsx>{`
        .animated-border {
          border-color: #fff;
          animation: border-flash 1s infinite alternate;
        }
        .animated-border + img + span {
          z-index: 10;
        }
        @keyframes border-flash {
          0% {
            border-color: #fff;
          }
          100% {
            border-color: #FFD700;
          }
        }
      `}</style>

      {/* Carousel Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${image.src})` }}
          />
          <div className="absolute inset-0 bg-background/60" />
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-background/20 hover:bg-background/30 text-foreground hidden md:flex"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-background/20 hover:bg-background/30 text-foreground hidden md:flex"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-primary" : "bg-primary/50"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroCarousel
